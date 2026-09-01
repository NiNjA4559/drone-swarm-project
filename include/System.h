#include <vector>
#include "Entity.h"
#include "Point.h"
#include "Task.h"

using namespace std;
class System {
    public:
    int grid_size;
    int entity_count;
    int range;
    vector<Entity> children;
    vector<vector<bool>> adj;
    vector<Task> tasks;

    System(int _grid_size, int _entity_count, int _range);

    static bool connected(Point a, Point b, int _range);

    void loss(int i);

    void exportJSON(int tick);
};