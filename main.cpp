#include <bits/stdc++.h>
#include "System.h"

using namespace std;

int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    //
    int n, k, R, t, q;
    int ability, x, y, id, w, query_type;

    cin >> n >> k >> R >> t;

    System model(n, k, R);

    for(int i = 0; i < k; i++) {  // O(k)
        cin >> ability >> x >> y;
        model.children.push_back(Entity(i, static_cast<TaskType>(ability), Point(x, y)));
        model.grid[y * n + x].push_back(i);
    }

    for(int i = 0; i < k; i++){
        for(int j = i + 1; j < k; j++) {  // O(k^2)
            if(System::connected(model.children[i].loc, model.children[j].loc, R)) {
                model.adj[i].push_back(j);
                model.adj[j].push_back(i);
            }
        }
    }

    for(int tick = 1; tick <= t; tick++) {
        cout << "Tick " << tick << ":\n";
        cin >> q;
        while(q--) {

            cin >> query_type;

            const auto start = chrono::steady_clock::now();

            if(query_type == 1) {
                cin >> id;
                model.loss(id); // to be implemented later, after task allocation
            } else if(query_type == 2) {
                cin >> w >> x >> y;
            } else if(query_type == 3) {
                cin >> id >> x >> y;
            }

            const auto end = chrono::steady_clock::now();

            auto duration_ns = chrono::duration_cast<chrono::nanoseconds>(end - start);
            cout << "Query Type: " << query_type << ", " << "Time: " << duration_ns.count() << " ns\n";

        }
        // Create a single JSON history file for visualisation
        model.exportJSON(tick);
    }

    model.finalizeJSON();
    return 0;
}

// Input Format

/*
1. grid_size(n) entity_count(k) communication_range(R) number_of_ticks(t)
    k lines having (ability_i x_i y_i) representing the ability of the entity i and its location at t = 0
for all t in [1, t]:
2. q (followed by q lines containing one of the three types of queries on all q lines)
    1 i (Loss of ith entity)
    2 w x y (New task of type w available at (x, y))
    3 i x y (ith entity that was lost previously is found working at (x, y))
*/

// Remarks
/*
1. i is 0-indexed
*/
