#include "TaskType.h"
#include "Task.h"
#include "Point.h"

class Entity {
    public:
    int id;
    bool functional;
    Point loc;
    TaskType ability;
    bool idle;
    Task job;
    
    Entity(int _id, TaskType _ability, Point _loc);
};