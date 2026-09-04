#include <cmath>
#include <vector>
#include <queue>
#include <algorithm>
#include <fstream>
#include <sstream>
#include "System.h"

using namespace std;

System::System(int _grid_size, int _entity_count, int _range) {
    this->grid_size = _grid_size;
    this->entity_count = _entity_count;
    this->range = _range;
    this->adj.resize(_entity_count);
    // this->grid.resize(_grid_size, vector<int> (_grid_size, -1));

    this->vis.resize(_entity_count, false);
}

bool System::connected(Point a, Point b, int _range) {
    return abs(a.x - b.x) + std::abs(a.y - b.y) <= _range;
}

void System::loss(int i) {
    //System.children[i].functional = false;

}

Entity System::findNearestEntity(Task job) {

    // Random allocation for testing

    for(const auto &entity : this->children) {
        if(entity.idle) return entity;
    }
    return Entity();

}

void System::gossip(Task job) {

    Entity nearest_entity = findNearestEntity(job);

    fill(vis.begin(), vis.end(), false);

    queue<int> q;

    while(!q.empty()) {
        
    }
}

void System::assignTask(Task job, int id) {

}

void System::addTask(Task job) {
    this->tasks.push_back(job);
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
        file << "      {\"id\": " << i
             << ", \"x\": " << children[i].loc.x
             << ", \"y\": " << children[i].loc.y
             << ", \"ability\": " << static_cast<int>(children[i].ability)
             << ", \"functional\": " << (children[i].functional ? "true" : "false") << "}";
        if(i < children.size() - 1) file << ",";
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