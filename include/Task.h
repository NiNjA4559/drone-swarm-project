#ifndef TASK_H
#define TASK_H

#include <vector>
#include "TaskType.h"
#include "Point.h"

using namespace std;

class Task {
    public:
    TaskType type;
    int id;
    Point loc;
    bool completed;
    bool assigned;
    vector<int> knownEntities;
    int assignedTo;

    Task();
    Task(int _id, Point _loc, TaskType _type);
};

#endif