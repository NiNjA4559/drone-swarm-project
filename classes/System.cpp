#include "System.h"

System::System(_grid_size, _entity_count) {
    this.grid_size = _grid_size;
    this.entity_count = _entity_count;
    this.adj.resize(_entity_count, vector<int> (_entity_count, false));
}