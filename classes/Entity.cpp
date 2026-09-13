#include "Entity.h"

Entity::Entity()
    : id(-1),
      ability(TaskType::None),
      loc(-1, -1),
      idle(true),
      functional(false),
      job(std::nullopt) {}

Entity::Entity(int _id, TaskType _ability, Point _loc) 
    : id(_id),
      ability(_ability),
      loc(_loc),
      idle(true),
      functional(true),
      job(std::nullopt) {}
