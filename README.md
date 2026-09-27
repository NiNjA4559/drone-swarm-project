# Drone Swarm Project

A C++23 simulation of a decentralized drone swarm. Drones (entities) communicate over
a limited-range network, elect a leader within each connected topology via gossip, and
cooperatively pick up, travel to, and complete tasks. Includes a browser-based canvas
visualizer with network topology overlay and a benchmarking view for comparing runs
against a fixed testcase.

## Prerequisites

- A C++23 compiler. This project uses `<bits/stdc++.h>`, so a GCC-based toolchain
  (e.g. MinGW-w64 on Windows) is required.
- `make` (`mingw32-make` on Windows via MinGW).
- A modern browser to open the visualizer (no server required).
- Node.js, only if you want to regenerate `input.txt` with `generator/index.js`.

## Build & run

```
mingw32-make build      # compiles main.exe
mingw32-make run        # runs main.exe against input.txt
mingw32-make all        # build + run
```

Each run reads `input.txt`, simulates every tick, and writes:

- `visualisation/simulation.js` — a full per-tick snapshot for animation.
- `visualisation/benchmarks.js` — a summary of the run, appended to run history
  (see [Benchmarking](#benchmarking)).

Open [visualisation/index.html](visualisation/index.html) directly in a browser to view
the results.

## Input format

```
grid_size entity_count communication_range number_of_ticks
<entity_count lines>: ability x y      (ability/type: 1=Delivery, 2=Imaging, 3=Relay)

for each tick:
q                                       (number of queries this tick)
<q lines, one of>:
  1 i          entity i is lost (goes non-functional)
  2 task_id w x y   new task of type w becomes available at (x, y)
```

Entity indices are 0-indexed. A fixed example testcase is checked in as `input.txt`;
query types 1 and 2 are supported. Recovery (query type 3) is reserved for a future
release and currently causes the simulator to stop with an explicit error; do not use
type-3 queries in input files. The random testcase generator also emits only query types
1 and 2. Regenerate a random testcase with:

```
cd generator
node index.js
```

The generator writes to the repository's `input.txt` by default. Pass an output path to
write somewhere else.

## Visualization

`visualisation/index.html` animates the exported ticks: step forward/back, autoplay at
adjustable speed, and toggle the network topology overlay (connected components, drawn
as hulls, with the elected leader highlighted). A status line reports live metrics
(moves, tasks completed/created, active tasks, per-tick timings).

## Benchmarking

Because the simulator always runs against the same `input.txt`, you can use it to check
whether a code change made the system measurably better or worse:

```
mingw32-make build
mingw32-make run LABEL="short description of the change"
```

Each run appends one entry (label, timestamp, total moves, tasks completed/created,
query time, simulation time) to `visualisation/benchmarks.js`. The visualizer's
"Benchmark History" section renders every recorded run as a bar chart and table, so you
can compare the current run against previous ones at a glance. Omit `LABEL` and a
timestamp is used instead. Timing is single-run wall-clock data and can vary between
runs; compare multiple runs with the same testcase. Simulation time includes query
handling and the simulation steps; the separately reported query time is a subset of
that total. Memory usage is not measured.

`visualisation/simulation.js` and `visualisation/benchmarks.js` are generated output and
are gitignored — running the project locally regenerates them.

## Project structure

```
main.cpp             Entry point: reads input, drives the tick loop, exports JSON
classes/, include/   System, Entity, Task, Point implementations and headers
imports/             Third-party SlotMap (see below)
generator/           Node.js script to generate random testcases
visualisation/       Canvas-based animation + benchmarking viewer
```

## 3rd-party code usage

- [Slot Map](https://github.com/sporacid/slot-map) (`imports/SlotMap.hpp`), licensed
  under the Boost Software License. The full license text is included in
  [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).

## License

This project's own code is licensed under the [MIT License](LICENSE). Third-party code
retains its original license as noted above.