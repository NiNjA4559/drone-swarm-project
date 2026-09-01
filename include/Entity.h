#ifndef ENTITY_H
#define ENTITY_H
#include "TaskType.h"
#include "Point.h"

class Task;

class Entity {
    public:
    int id;
    bool functional;
    Point loc;
    TaskType ability;
    bool idle;
    Task* job;
    
    Entity();
    Entity(int _id, TaskType _ability, Point _loc);
};

#endif