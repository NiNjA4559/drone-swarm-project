#ifndef ENTITY_H
#define ENTITY_H
#include <optional>
#include "TaskType.h"
#include "Point.h"
#include "Task.h"
#include "TaskKey.h"

class Entity {
    public:
    int id;
    bool functional;
    Point loc;
    TaskType ability;
    bool idle;
    std::optional<TaskKey> job;
    
    Entity();
    Entity(int _id, TaskType _ability, Point _loc);
};

#endif