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
    long long total_moves = 0;
    long long total_tasks_created = 0;
    long long total_tasks_completed = 0;

    vector<Entity> children;
    vector<vector<int>> adj;

    TaskMap tasks;

    unordered_map<int, vector<int>> grid; // key = y * grid_size + x

    System(int _grid_size, int _entity_count, int _range);

    static bool connected(const Point &a, const Point &b, int _range);

    static int distance(const Point &a, const Point &b);

    bool matchesTask(const Task &job, const auto &ability);

    void loss(int i);

    int findNearestEntity(const Task& job);

    void addTask(const Task &job);

    void gossip();

    void assignTask(TaskKey taskKey, int target);

    void assignPendingTasks();

    void moveEntities();

    void rebuildAdjacency();

    void exportJSON(int tick, long long query_time_ns, long long simulation_time_ns, int query_count);
    void finalizeJSON();

    private:
    vector<bool> vis;
};