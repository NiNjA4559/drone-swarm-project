#include "Entity.h"

class Task {
    public:
    TaskType type;
    Point loc;
    bool completed;
    bool assigned;
    Entity assignedTo;

    Task(Point _loc, TaskType _type);
};