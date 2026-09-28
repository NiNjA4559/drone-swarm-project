#include "Point.h"

Point::Point() : x(-1), y(-1) {};
Point::Point(int _x, int _y) : x(_x), y(_y) {};

bool Point::operator==(const Point &other) const {
        return (x == other.x && y == other.y);
}

bool Point::operator!=(const Point &other) const {
    return x != other.x || y != other.y;
}