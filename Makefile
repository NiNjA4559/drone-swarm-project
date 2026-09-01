CXX = g++
CXXFLAGS = -I include
SRCS = main.cpp $(wildcard classes/*.cpp) $(wildcard helpers/*.cpp)
INPUT = input.txt
TARGET = main.exe

# Default rule: builds and immediately runs
all: build run

build:
	$(CXX) $(CXXFLAGS) $(SRCS) -o $(TARGET)

run:
	./$(TARGET) < $(INPUT)

clean:
	del /f /q $(TARGET) 2>nul || rm -f $(TARGET)