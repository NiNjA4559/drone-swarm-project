#include <vector>
#include <unordered_map>
#include <unordered_set>
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
    vector<vector<int>> adj;

    vector<Task> tasks;

    unordered_map<int, vector<int>> grid; // key = y * grid_size + x

    System(int _grid_size, int _entity_count, int _range);

    static bool connected(Point a, Point b, int _range);

    void loss(int i);

    Entity findNearestEntity(Task job);

    void addTask(Task job);

    void gossip(Task job);

    void assignTask(Task job, int id);

    void exportJSON(int tick);
    void finalizeJSON();

    private:
    vector<bool> vis;
};