#include <optional>
#include <cmath>
#include <climits>
#include <vector>
#include <queue>
#include <algorithm>
#include <fstream>
#include <sstream>
#include <type_traits>
#include "System.h"
#include "SlotMap.hpp"

using namespace std;
using namespace SlotMap;

System::System(int _grid_size, int _entity_count, int _range) {
    this->grid_size = _grid_size;
    this->entity_count = _entity_count;
    this->range = _range;
    this->adj.resize(_entity_count);
    // this->grid.resize(_grid_size, vector<int> (_grid_size, -1));

    this->vis.resize(_entity_count, false);
}

bool System::connected(const Point &a, const Point &b, int _range) {
    return abs(a.x - b.x) + std::abs(a.y - b.y) <= _range;
}

int System::distance(const Point &a, const Point &b) {
    return abs(a.x - b.x) + std::abs(a.y - b.y);
};

bool System::matchesTask(const Task &job, const auto &ability) {
    using type = std::remove_cvref_t<decltype(ability)>;
    if constexpr(is_same_v<type, TaskType>) {
        return ability == job.type;
    } else if constexpr(is_same_v<type, vector<TaskType>>) {
        return ranges::contains(ability, job.type); 
    }
    return true;
};

void System::loss(int i) {
    Entity& entity = children[i];
    entity.functional = false;
    if(!entity.idle) {
        Task* task = tasks.try_at(entity.job.value());

        if(task != nullptr) {
            task->assigned = false;
            task->assignedTo = -1;
            if(task->leader == i) task->leader = -1;
        }

        entity.job.reset();
    }

    entity.idle = true;
}

int System::findNearestEntity(const Task &job) {

    // Brute-force find

    int nearest_entity = -1;
    int dist = INT_MAX;

    for(const auto &entity : this->children) {
        if(!entity.functional ||
        !entity.idle ||
        !this->matchesTask(job, entity.ability) ||
        (job.leader != -1 && entity.leader != job.leader)) {
            continue;
        }

        const int currentDistance = distance(job.loc, entity.loc);

        if(currentDistance < dist) {
            nearest_entity = entity.id;
            dist = currentDistance;
        }
    }
    return nearest_entity;

}

void System::gossip() {

    queue<int> q;
    fill(vis.begin(), vis.end(), false);

    for(int i = 0; i < entity_count; i++) {

        if(vis[i] || !this->children[i].functional) continue;

        int leader = i;
        vector<int> topology;

        topology.push_back(i);
        q.push(i);
        vis[i] = true;
        while(!q.empty()) {
            int curr_id = q.front();
            q.pop();

            for(const int &neighbour : adj[curr_id]) {
                if(!this->children[neighbour].functional ||
                    vis[neighbour]) continue;
                
                leader = min(leader, neighbour);  // Elect the entity with the lowest index as the leader
                vis[neighbour] = true;
                topology.push_back(neighbour);
                q.push(neighbour);
            }

        }
        for(int &x : topology) {
            Entity& entity = this->children[x];
            const int oldLeader = entity.leader;

            if(oldLeader != leader) {
                if(entity.job.has_value()) {
                    Task* task = tasks.try_at(entity.job.value());

                    if(task != nullptr) {
                        task->assigned = false;
                        task->assignedTo = -1;
                        if(task->leader != -1 &&
                        !this->children[task->leader].functional) task->leader = -1;
                    }

                    entity.job.reset();
                    entity.idle = true;
                }

                entity.leader = leader;
            }
        }
    }
    for(const auto& [taskKey, taskView] : tasks) {
        if(taskView.leader == -1) continue;

        Task* task = tasks.try_at(taskKey);
        if(task == nullptr) continue;

        const int owner = taskView.leader;

        if(!this->children[owner].functional) {
            task->leader = -1;
            continue;
        }

        task->leader = this->children[owner].leader;
    }
}

void System::assignTask(TaskKey taskKey, int target) {
    Task* task = tasks.try_at(taskKey);

    if(task == nullptr || target < 0 || target >= static_cast<int>(children.size())) {
        return;
    }

    Entity& entity = children[target];

    if(!entity.functional || !entity.idle) {
        return;
    }

    task->assigned = true;
    task->assignedTo = entity.id;
    
    if(task->leader == -1) {
        task->leader = entity.leader;
    }

    entity.idle = false;
    entity.job = taskKey;

}

void System::addTask(const Task &job) {
    std::optional<TaskKey> maybeKey =
        tasks.try_emplace(job.id, job.loc, job.type);

    if(!maybeKey.has_value()) {
        return;
    }

    total_tasks_created++;
}

void System::assignPendingTasks() {
    for(const auto& [taskKey, task] : tasks) {
        if(task.assigned || task.completed) continue;

        const int target = findNearestEntity(task);

        if(target != -1) assignTask(taskKey, target);
    }
    }

void System::moveEntities() {
     for(Entity& entity : children) {
        if(!entity.functional) continue;
        else if(entity.idle) {
            // Implement idling movement
        } else {
            // Move closer to the task location
            Task* task = tasks.try_at(entity.job.value());

            if(task == nullptr) {
                entity.job.reset();
                entity.idle = true;
                continue;
            }

            if(entity.loc.x > task->loc.x) {
                entity.loc.x--;
                total_moves++;
            } else if(entity.loc.x < task->loc.x) {
                entity.loc.x++;
                total_moves++;
            } else if(entity.loc.y > task->loc.y) {
                entity.loc.y--;
                total_moves++;
            } else if(entity.loc.y < task->loc.y) {
                entity.loc.y++;
                total_moves++;
            }

            if(entity.loc.x == task->loc.x &&
            entity.loc.y == task->loc.y) {
                const TaskKey completedTask = entity.job.value();
                task->completed = true;
                total_tasks_completed++;
                entity.idle = true;
                entity.job.reset();
                tasks.erase(completedTask);
            }
        }
    }
}

void System::rebuildAdjacency() {
    adj.assign(children.size(), {});

    for(int i = 0; i < this->entity_count; i++) {
        if(!children[i].functional) {
            continue;
        }

        for(int j = i + 1; j < this->entity_count; j++) {
            if(!children[j].functional) {
                continue;
            }

            if(connected(children[i].loc, children[j].loc, range)) {
                adj[i].push_back(j);
                adj[j].push_back(i);
            }
        }
    }
}

// Copilot hehe
void System::exportJSON(int tick, long long query_time_ns, long long simulation_time_ns, int query_count) {
    static bool firstTick = true;

    if(firstTick) {
        ofstream resetFile("visualisation/simulation.js", ios::out | ios::trunc);
        resetFile << "const simulationData = [\n";
        resetFile.close();
        firstTick = false;
    }

    ofstream file("visualisation/simulation.js", ios::app);
    if(!firstTick) {
        // Add a comma between array entries after the first one.
        static bool firstEntryWritten = false;
        if(firstEntryWritten) {
            file << ",\n";
        }
        firstEntryWritten = true;
    }

    int activeTasks = 0;
    for(const auto& [taskKey, task] : tasks) {
        activeTasks++;
    }

    file << "  {\n";
    file << "    \"tick\": " << tick << ",\n";
    file << "    \"grid_size\": " << grid_size << ",\n";
    file << "    \"communication_range\": " << range << ",\n";
    file << "    \"metrics\": {\n";
    file << "      \"moves\": " << total_moves << ",\n";
    file << "      \"tasks_created\": " << total_tasks_created << ",\n";
    file << "      \"tasks_completed\": " << total_tasks_completed << ",\n";
    file << "      \"active_tasks\": " << activeTasks << ",\n";
    file << "      \"query_count\": " << query_count << ",\n";
    file << "      \"query_time_ns\": " << query_time_ns << ",\n";
    file << "      \"simulation_time_ns\": " << simulation_time_ns << "\n";
    file << "    },\n";
    file << "    \"entities\": [\n";

    for(int i = 0; i < children.size(); i++) {
        const Entity& entity = children[i];
        file << "      {\"id\": " << entity.id
             << ", \"x\": " << entity.loc.x
             << ", \"y\": " << entity.loc.y
             << ", \"ability\": " << static_cast<int>(entity.ability)
             << ", \"functional\": " << (entity.functional ? "true" : "false")
             << ", \"idle\": " << (entity.idle ? "true" : "false")
             << ", \"task_id\": ";

        if(entity.job.has_value()) {
            const Task* task = tasks.try_at(entity.job.value());
            if(task != nullptr) {
                file << task->id;
            } else {
                file << "null";
            }
        } else {
            file << "null";
        }

        file << "}";
        if(i < children.size() - 1) file << ",";
        file << "\n";
    }

    file << "    ],\n";
    file << "    \"tasks\": [\n";

    bool firstTask = true;
    for(const auto& [taskKey, task] : tasks) {
        if(!firstTask) file << ",\n";
        firstTask = false;

        file << "      {\"id\": " << task.id
             << ", \"x\": " << task.loc.x
             << ", \"y\": " << task.loc.y
             << ", \"type\": " << static_cast<int>(task.type)
             << ", \"assigned\": " << (task.assigned ? "true" : "false")
             << ", \"assigned_to\": ";

        if(task.assigned) {
            file << task.assignedTo;
        } else {
            file << "null";
        }

        file << "}";
        file << "\n";
    }

    file << "    ]\n";
    file << "  }\n";
    file.close();
}

void System::finalizeJSON() {
    ofstream file("visualisation/simulation.js", ios::app);
    file << "\n];\n";
    file.close();
}