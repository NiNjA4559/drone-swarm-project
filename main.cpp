#include <iostream>
#include <chrono>
#include <string>
#include "System.h"

using namespace std;

int main(int argc, char* argv[]) {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    const string runLabel = argc > 1 ? argv[1] : "";

    //
    int n, k, R, t, q;
    int ability, x, y, id, task_id, w, query_type;

    if(!(cin >> n >> k >> R >> t)) {
        cerr << "Invalid initial input\n";
        return 1;
    }

    if(n <= 0 || k < 0 || R < 0 || t <= 0) {
        cerr << "Invalid simulation dimensions or tick count\n";
        return 1;
    }

    System model(n, k, R);

    for(int i = 0; i < k; i++) {
        if(!(cin >> ability >> x >> y)) {
            cerr << "Input ended while reading entities\n";
            return 1;
        }
        if(ability < Delivery || ability > Relay || x < 0 || x >= n || y < 0 || y >= n) {
            cerr << "Invalid ability or entity location for entity " << i << "\n";
            return 1;
        }
        model.children.push_back(Entity(i, static_cast<TaskType>(ability), Point(x, y)));
        model.grid[y * n + x].push_back(i);
    }

    model.rebuildAdjacency();
    //model.gossip();

    long long totalQueryTimeNs = 0;
    long long totalSimulationTimeNs = 0;

    for(int tick = 1; tick <= t; tick++) {
        cout << "Tick " << tick << ":\n";
        if(!(cin >> q)) {
            cerr << "Input ended before tick " << tick << "\n";
            return 1;
        }
        if(q < 0) {
            cerr << "Invalid query count on tick " << tick << "\n";
            return 1;
        }
        const int tickQueryCount = q;
        long long queryTimeNs = 0;
        const auto tickStart = chrono::steady_clock::now();
        while(q--) {

            if(!(cin >> query_type)) {
                cerr << "Input ended while reading a query on tick " << tick << "\n";
                return 1;
            }

            const auto start = chrono::steady_clock::now();

            if(query_type == 1) {
                if(!(cin >> id)) {
                    cerr << "Invalid loss query on tick " << tick << "\n";
                    return 1;
                }
                if(id < 0 || id >= k) {
                    cerr << "Invalid entity id in loss query on tick " << tick << "\n";
                    return 1;
                }
                model.loss(id);
            } else if(query_type == 2) {
                if(!(cin >> task_id >> w >> x >> y)) {
                    cerr << "Invalid task query on tick " << tick << "\n";
                    return 1;
                }

                if(w < Delivery || w > Relay || x < 0 || x >= n || y < 0 || y >= n) {
                    cerr << "Invalid task type or location on tick " << tick << "\n";
                    return 1;
                }

                model.addTask(Task(task_id, Point(x, y), static_cast<TaskType>(w)));
            } else if(query_type == 3) {
                cerr << "Recovery queries (type 3) are not supported in this release\n";
                return 2;
            } else {
                cerr << "Unknown query type " << query_type << " on tick " << tick << "\n";
                return 1;
            }

            const auto end = chrono::steady_clock::now();

            auto duration_ns = chrono::duration_cast<chrono::nanoseconds>(end - start);
            queryTimeNs += duration_ns.count();

        }

        model.moveEntities();
        model.rebuildAdjacency();
        model.gossip();
        model.assignPendingTasks();

        const auto tickEnd = chrono::steady_clock::now();
        const auto simulationTimeNs = chrono::duration_cast<chrono::nanoseconds>(tickEnd - tickStart).count();

        totalQueryTimeNs += queryTimeNs;
        totalSimulationTimeNs += simulationTimeNs;

        // Create a single JSON history file for visualisation
        model.exportJSON(tick, queryTimeNs, simulationTimeNs, tickQueryCount);
    }

    model.finalizeJSON();
    model.recordBenchmark(runLabel, totalSimulationTimeNs, totalQueryTimeNs, t);
    cout << "Run complete: " << model.total_moves << " moves, "
         << model.total_tasks_completed << " tasks completed, "
         << totalSimulationTimeNs << " ns simulation time\n";
    return 0;
}

// Input Format

/*
1. grid_size(n) entity_count(k) communication_range(R) number_of_ticks(t)
    k lines having (ability_i x_i y_i) representing the ability of the entity i and its location at t = 0
for all t in [1, t]:
2. q (followed by q lines containing supported query types)
    1 i (Loss of ith entity)
    2 task_id w x y (New task of type w available at (x, y))
    3 i x y (Recovery; reserved but unsupported in this release)
*/

// Remarks
/*
1. i is 0-indexed
*/
