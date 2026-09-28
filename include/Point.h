#ifndef POINT_H
#define POINT_H

class Point {
public:
    int x;
    int y;

    Point();
    Point(int _x, int _y);

    bool operator==(const Point &other) const;
    bool operator!=(const Point &other) const;

};

#endif