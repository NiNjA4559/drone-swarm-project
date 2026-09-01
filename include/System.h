#include "Entity.h"
using namespace std;
class System {
    public:
    int grid_size;
    int entity_count;
    vector<vector<int> adj;
    //vector<Entity> children;
    vector<Task> tasks;

    System(_grid_size, _entity_count);
}