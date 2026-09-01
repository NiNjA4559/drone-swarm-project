#ifndef POINT_H
#define POINT_H

class Point {
public:
    int x;
    int y;

    Point();
    Point(int _x, int _y);

    bool check_bounds(int lx, int rx, int ly, int ry);

    bool operator==(const Point &other) const;
    bool operator!=(const Point &other) const;

};

#endif