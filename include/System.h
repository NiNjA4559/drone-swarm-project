#include <vector>
#include <unordered_map>
#include <unordered_set>
#include "Entity.h"
#include "Point.h"
#include "Task.h"
#include "TaskKey.h"

using TaskMap = SlotMap::static_slot_map_st<TaskKey, Task, MAX_ACTIVE_TASKS>;

using namespace std;
class System {
    public:

    int grid_size;
    int entity_count;
    int range;

    vector<Entity> children;
    vector<vector<int>> adj;

    TaskMap tasks;

    unordered_map<int, vector<int>> grid; // key = y * grid_size + x

    System(int _grid_size, int _entity_count, int _range);

    static bool connected(const Point &a, const Point &b, int _range);

    static int distance(const Point &a, const Point &b);

    void loss(int i);

    int findNearestEntity(const Task& job) const;

    void addTask(const Task &job);

    void gossip(Task &job, int source);

    void assignTask(TaskKey taskKey, int target);

    void assignPendingTasks();

    void moveEntities();

    void exportJSON(int tick);
    void finalizeJSON();

    private:
    vector<bool> vis;
};