#include "Task.h"

Task::Task()
		: type(TaskType::None),
			id(-1),
			loc(-1, -1),
			completed(false),
			assigned(false),
			assignedTo(-1) {}

Task::Task(int _id, Point _loc, TaskType _type)
		: type(_type),
			id(_id),
			loc(_loc),
			completed(false),
			assigned(false),
			assignedTo(-1) {}
