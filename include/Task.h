#ifndef TASK_H
#define TASK_H

#include "TaskType.h"
#include "Point.h"
#include "Entity.h"

class Task {
    public:
    TaskType type;
    Point loc;
    bool completed;
    bool assigned;
    vector<int> knownEntities;
    int assignedTo;

    Task();
    Task(Point _loc, TaskType _type);
};

#endif