#include <optional>
#include <cmath>
#include <climits>
#include <vector>
#include <queue>
#include <algorithm>
#include <fstream>
#include <sstream>
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

void System::loss(int i) {
    if(i < 0 || i >= static_cast<int>(children.size())) {
        return;
    }

    Entity& entity = children[i];
    entity.functional = false;
    if(!entity.idle) {
        Task* task = tasks.try_at(entity.job.value());

        if(task != nullptr) {
            task->assigned = false;
            task->assignedTo = -1;
        }

        entity.job.reset();
    }

    entity.idle = true;
    assignPendingTasks();
}

int System::findNearestEntity(const Task &job) const {

    // Brute-force find

    int nearest_entity = -1;
    int dist = INT_MAX;

    for(const auto &entity : this->children) {
        if(!entity.functional ||
       !entity.idle ||
       entity.ability != job.type) {
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

void System::gossip(Task &job, int source) {
    fill(vis.begin(), vis.end(), false);

    queue<int> q;

    fill(vis.begin(), vis.end(), false);

    q.push(source);

    while(!q.empty()) {
        int curr_id = q.front();
        vis[curr_id] = true;
        q.pop();

        job.knownEntities.push_back(curr_id);

        for(const int &neighbour : adj[curr_id]) {
            if(vis[neighbour]) continue;
            q.push(neighbour);
        }

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

    entity.idle = false;
    entity.job = taskKey;
}

void System::addTask(const Task &job) {
    std::optional<TaskKey> maybeKey =
        tasks.try_emplace(job.id, job.loc, job.type);

    if(!maybeKey.has_value()) {
        return;
    }

    assignPendingTasks();
}

void System::assignPendingTasks() {
    for(auto [taskKey, task] : tasks) {
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

            if(entity.loc.x > task->loc.x) {
                entity.loc.x--;
            } else if(entity.loc.x < task->loc.x) {
                entity.loc.x++;
            } else if(entity.loc.y > task->loc.y) {
                entity.loc.y--;
            } else if(entity.loc.y < task->loc.y) {
                entity.loc.y++;
            }

            if(entity.loc.x == task->loc.x &&
            entity.loc.y == task->loc.y) {
                const TaskKey completedTask = entity.job.value();
                task->completed = true;
                entity.idle = true;
                entity.job.reset();
                tasks.erase(completedTask);
            }
        }
    }

    assignPendingTasks();
}

// Copilot hehe
void System::exportJSON(int tick) {
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

    file << "  {\n";
    file << "    \"tick\": " << tick << ",\n";
    file << "    \"grid_size\": " << grid_size << ",\n";
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