#include "Task.h"

Task::Task() {};
Task::Task(Point _loc, TaskType _type): loc(_loc), type(_type), completed(false), assigned(false) {};
