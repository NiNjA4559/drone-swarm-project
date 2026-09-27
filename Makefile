CXX = g++
CXXFLAGS = -std=c++23 -I include -I imports
SRCS = main.cpp $(wildcard classes/*.cpp)
INPUT = input.txt
TARGET = main.exe

.PHONY: all build run clean

# Default rule: builds and immediately runs
all: build run

build:
	$(CXX) $(CXXFLAGS) $(SRCS) -o $(TARGET)

run:
	$(TARGET) "$(LABEL)" < $(INPUT)

clean:
	del /f /q $(TARGET) 2>nul || rm -f $(TARGET)