#include "Entity.h"

Entity::Entity() : id(-1), ability(TaskType::None), loc(-1, -1) {}

Entity::Entity(int _id, TaskType _ability, Point _loc) 
    : id(_id), ability(_ability), loc(_loc), idle(false), functional(true) {}
