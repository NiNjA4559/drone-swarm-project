#pragma once

#include <cstddef>
#include "SlotMap.hpp"

using TaskKey = SlotMap::slot_key;

constexpr std::size_t MAX_ACTIVE_TASKS = 16383;
