#include <cmath>
#include <fstream>
#include <sstream>
#include "System.h"

System::System(int _grid_size, int _entity_count, int _range) {
    this->grid_size = _grid_size;
    this->entity_count = _entity_count;
    this->range = _range;
    this->adj.resize(_entity_count, vector<bool> (_entity_count, false));
}

bool System::connected(Point a, Point b, int _range) {
    return std::abs(a.x - b.x) + std::abs(a.y - b.y) <= _range;
}

void System::loss(int i) {
    //System.children[i].functional = false;

}

// Copilot hehe
void System::exportJSON(int tick) {
    static bool started = false;

    if(!started) {
        ofstream file("simulation.json", ios::out | ios::trunc);
        file << "[\n";
        file.close();
        started = true;
    }

    ofstream file("simulation.json", ios::app);
    if(started && !file.is_open()) {
        file.open("simulation.json", ios::app);
    }

    if(file.tellp() > 0 && file.tellp() > 2) {
        file << ",\n";
    }

    file << "  {\n";
    file << "    \"tick\": " << tick << ",\n";
    file << "    \"grid_size\": " << grid_size << ",\n";
    file << "    \"entities\": [\n";

    for(int i = 0; i < children.size(); i++) {
        file << "      {\"id\": " << i
             << ", \"x\": " << children[i].loc.x
             << ", \"y\": " << children[i].loc.y
             << ", \"functional\": " << (children[i].functional ? "true" : "false") << "}";
        if(i < children.size() - 1) file << ",";
        file << "\n";
    }

    file << "    ]\n";
    file << "  }\n";
    file.close();
}

void System::finalizeJSON() {
    ofstream file("simulation.json", ios::app);
    file << "\n]\n";
    file.close();
}