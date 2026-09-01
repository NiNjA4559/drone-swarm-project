#include "Entity.h"

Entity::Entity() : id(0), ability(TaskType::Relay), loc(0, 0) {}

Entity::Entity(int _id, TaskType _ability, Point _loc) 
    : id(_id), ability(_ability), loc(_loc), idle(false), functional(true) {}
