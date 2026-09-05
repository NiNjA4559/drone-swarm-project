#ifndef TASK_H
#define TASK_H

#include <vector>
#include "TaskType.h"
#include "Point.h"

using namespace std;

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