const simulationData = [
  {
    "tick": 1,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 4, "y": 16, "ability": 1, "functional": true, "idle": false, "task_id": 0},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 14, "y": 6, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 17, "y": 14, "ability": 3, "functional": true, "idle": false, "task_id": 1},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 0, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 12, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 0, "x": 4, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 1, "x": 17, "y": 12, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 2,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 4, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 0},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 14, "y": 6, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 17, "y": 13, "ability": 3, "functional": true, "idle": false, "task_id": 1},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 0, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 12, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 0, "x": 4, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 1, "x": 17, "y": 12, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 3,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 4, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 0},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 14, "y": 6, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 17, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 17, "ability": 3, "functional": true, "idle": false, "task_id": 3},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 13, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 0, "x": 4, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 3, "x": 1, "y": 15, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 4,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 4, "y": 13, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 4},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 17, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": true, "idle": false, "task_id": 3},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 14, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 4, "x": 15, "y": 8, "type": 3, "assigned": true, "assigned_to": 5}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 3, "x": 1, "y": 15, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 5,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 5, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 5},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 4},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 17, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 15, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 5, "x": 6, "y": 17, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 4, "x": 15, "y": 8, "type": 3, "assigned": true, "assigned_to": 5}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
    ]
  }
,
  {
    "tick": 6,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 5},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 12, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 18, "y": 18, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 5, "x": 6, "y": 17, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 7,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 5},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 11, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 17, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 7},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 5, "x": 6, "y": 17, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 7, "x": 16, "y": 17, "type": 1, "assigned": true, "assigned_to": 12}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 8,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 5},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 10, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 7},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 5, "x": 6, "y": 17, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 7, "x": 16, "y": 17, "type": 1, "assigned": true, "assigned_to": 12}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 9,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 16, "ability": 1, "functional": true, "idle": false, "task_id": 5},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 0, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 2},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 5, "x": 6, "y": 17, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 2, "x": 18, "y": 6, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 10,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 8},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 8, "x": 1, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 11,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 8},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 8, "x": 1, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 12,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 8},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 8, "x": 1, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 13,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 10},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 15, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 0, "y": 0, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 9, "ability": 1, "functional": true, "idle": false, "task_id": 8},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 10, "x": 6, "y": 19, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 8, "x": 1, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 14,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 2, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 14, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 11},
      {"id": 6, "x": 1, "y": 0, "ability": 1, "functional": true, "idle": false, "task_id": 12},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 8},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 8, "x": 1, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 11, "x": 12, "y": 8, "type": 3, "assigned": true, "assigned_to": 5}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 12, "x": 3, "y": 2, "type": 1, "assigned": true, "assigned_to": 6}
    ]
  }
,
  {
    "tick": 15,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 2, "ability": 2, "functional": true, "idle": false, "task_id": 14},
      {"id": 5, "x": 13, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 11},
      {"id": 6, "x": 2, "y": 0, "ability": 1, "functional": true, "idle": false, "task_id": 12},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 7, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 13},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 13, "x": 9, "y": 4, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 11, "x": 12, "y": 8, "type": 3, "assigned": true, "assigned_to": 5}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 12, "x": 3, "y": 2, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 14, "x": 15, "y": 5, "type": 2, "assigned": true, "assigned_to": 4}
    ]
  }
,
  {
    "tick": 16,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 15},
      {"id": 4, "x": 15, "y": 2, "ability": 2, "functional": true, "idle": false, "task_id": 14},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 0, "ability": 1, "functional": true, "idle": false, "task_id": 12},
      {"id": 7, "x": 18, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 2, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 8, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 13},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 13, "x": 9, "y": 4, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 15, "x": 16, "y": 2, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 12, "x": 3, "y": 2, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 14, "x": 15, "y": 5, "type": 2, "assigned": true, "assigned_to": 4}
    ]
  }
,
  {
    "tick": 17,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 14, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 15},
      {"id": 4, "x": 15, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 14},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 1, "ability": 1, "functional": true, "idle": false, "task_id": 12},
      {"id": 7, "x": 17, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 6},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 13},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 13, "x": 9, "y": 4, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 15, "x": 16, "y": 2, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 6, "x": 18, "y": 0, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 12, "x": 3, "y": 2, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 14, "x": 15, "y": 5, "type": 2, "assigned": true, "assigned_to": 4}
    ]
  }
,
  {
    "tick": 18,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 15, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 15},
      {"id": 4, "x": 15, "y": 4, "ability": 2, "functional": true, "idle": false, "task_id": 14},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 16, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 15, "x": 16, "y": 2, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 14, "x": 15, "y": 5, "type": 2, "assigned": true, "assigned_to": 4}
    ]
  }
,
  {
    "tick": 19,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 15},
      {"id": 4, "x": 15, "y": 5, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 15, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 15, "x": 16, "y": 2, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
    ]
  }
,
  {
    "tick": 20,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 5, "ability": 2, "functional": true, "idle": false, "task_id": 17},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 14, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 17, "x": 12, "y": 3, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
    ]
  }
,
  {
    "tick": 21,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 5, "ability": 2, "functional": true, "idle": false, "task_id": 17},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 13, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 16, "ability": 2, "functional": true, "idle": false, "task_id": 18},
      {"id": 14, "x": 8, "y": 17, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 17, "x": 12, "y": 3, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 18, "x": 1, "y": 18, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
    ]
  }
,
  {
    "tick": 22,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 5, "ability": 2, "functional": true, "idle": false, "task_id": 17},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 12, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 16},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 4, "y": 14, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 18},
      {"id": 14, "x": 8, "y": 18, "ability": 3, "functional": true, "idle": false, "task_id": 19},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 17, "x": 12, "y": 3, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 18, "x": 1, "y": 18, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 16, "x": 11, "y": 8, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 19, "x": 8, "y": 19, "type": 3, "assigned": true, "assigned_to": 14}
    ]
  }
,
  {
    "tick": 23,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 4, "ability": 2, "functional": true, "idle": false, "task_id": 17},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 11, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 5, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 19, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 17, "x": 12, "y": 3, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 24,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 11, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 10, "x": 6, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 19, "ability": 3, "functional": true, "idle": false, "task_id": 21},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 21, "x": 9, "y": 16, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 25,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 15, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 3, "y": 2, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 11, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 7, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 18, "ability": 3, "functional": true, "idle": false, "task_id": 21},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 21, "x": 9, "y": 16, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 26,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 14, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 23},
      {"id": 7, "x": 11, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 17, "ability": 3, "functional": true, "idle": false, "task_id": 21},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 21, "x": 9, "y": 16, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 23, "x": 4, "y": 7, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 27,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 23},
      {"id": 7, "x": 11, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 23, "x": 4, "y": 7, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 28,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 23},
      {"id": 7, "x": 10, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 24},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 13, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 24, "x": 9, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 23, "x": 4, "y": 7, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 29,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 23},
      {"id": 7, "x": 9, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 24},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 24, "x": 9, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 23, "x": 4, "y": 7, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 30,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 22},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 23},
      {"id": 7, "x": 9, "y": 9, "ability": 2, "functional": true, "idle": false, "task_id": 24},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 10, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 22, "x": 12, "y": 5, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 24, "x": 9, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 23, "x": 4, "y": 7, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 31,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 10, "ability": 2, "functional": true, "idle": false, "task_id": 24},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 9, "ability": 2, "functional": true, "idle": false, "task_id": 20},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 24, "x": 9, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 20, "x": 8, "y": 8, "type": 2, "assigned": true, "assigned_to": 10}
    ]
  }
,
  {
    "tick": 32,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 19, "y": 19, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 24},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 10, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 24, "x": 9, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
    ]
  }
,
  {
    "tick": 33,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 18, "y": 19, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 2, "x": 9, "y": 9, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 12, "y": 3, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 9, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 1}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
    ]
  }
,
  {
    "tick": 34,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 2, "x": 8, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 13, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 16, "y": 17, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 1}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
    ]
  }
,
  {
    "tick": 35,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 7, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 10, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 15, "y": 17, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 7, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 12}
    ]
  }
,
  {
    "tick": 36,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 6, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 15, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 11, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 16, "ability": 3, "functional": true, "idle": false, "task_id": 30},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 12}
,
      {"id": 30, "x": 7, "y": 15, "type": 3, "assigned": true, "assigned_to": 14}
    ]
  }
,
  {
    "tick": 37,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 6, "y": 19, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 5, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 13, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 16, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 12, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 16, "ability": 3, "functional": true, "idle": false, "task_id": 30},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 5, "ability": 2, "functional": true, "idle": false, "task_id": 25}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 25, "x": 1, "y": 4, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 30, "x": 7, "y": 15, "type": 3, "assigned": true, "assigned_to": 14}
    ]
  }
,
  {
    "tick": 38,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 7, "y": 19, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 13, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 17, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 13, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 1, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 39,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 8, "y": 19, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 3, "x": 13, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 18, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 14, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 2, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 32},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 4, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 2}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 32, "x": 3, "y": 11, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 40,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 9, "y": 19, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 19, "y": 3, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 14, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 3, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 8, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 41,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 10, "y": 19, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 9, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 19, "y": 2, "ability": 2, "functional": true, "idle": false, "task_id": 28},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 4, "y": 7, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 14, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 26},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 3, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 7, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 18, "y": 6, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 26, "x": 14, "y": 15, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 28, "x": 19, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 42,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 19, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 5, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 3, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 17, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 33},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 33, "x": 17, "y": 1, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 43,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 6, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 3, "y": 11, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 5, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 17, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 33},
      {"id": 19, "x": 1, "y": 4, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 33, "x": 17, "y": 1, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 44,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 17, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 12, "ability": 1, "functional": true, "idle": false, "task_id": 29},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 7, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 4, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 6, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 4, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 17, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 33},
      {"id": 19, "x": 1, "y": 5, "ability": 2, "functional": true, "idle": false, "task_id": 36}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 36, "x": 1, "y": 6, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 33, "x": 17, "y": 1, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 29, "x": 13, "y": 13, "type": 1, "assigned": true, "assigned_to": 3}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 45,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 16, "ability": 1, "functional": true, "idle": false, "task_id": 31},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 13, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 38},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 8, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 18, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 17, "y": 3, "ability": 1, "functional": true, "idle": false, "task_id": 33},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 33, "x": 17, "y": 1, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 31, "x": 11, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
,
      {"id": 38, "x": 17, "y": 12, "type": 1, "assigned": true, "assigned_to": 3}
    ]
  }
,
  {
    "tick": 46,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 14, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 38},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 9, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 27},
      {"id": 18, "x": 17, "y": 2, "ability": 1, "functional": true, "idle": false, "task_id": 33},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 27, "x": 4, "y": 7, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 33, "x": 17, "y": 1, "type": 1, "assigned": true, "assigned_to": 18}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
,
      {"id": 38, "x": 17, "y": 12, "type": 1, "assigned": true, "assigned_to": 3}
    ]
  }
,
  {
    "tick": 47,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 15, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 38},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 10, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 9, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 16, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
,
      {"id": 38, "x": 17, "y": 12, "type": 1, "assigned": true, "assigned_to": 3}
    ]
  }
,
  {
    "tick": 48,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 16, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 38},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 11, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
,
      {"id": 38, "x": 17, "y": 12, "type": 1, "assigned": true, "assigned_to": 3}
    ]
  }
,
  {
    "tick": 49,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 38},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
,
      {"id": 38, "x": 17, "y": 12, "type": 1, "assigned": true, "assigned_to": 3}
    ]
  }
,
  {
    "tick": 50,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 19, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 13, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 51,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 4, "x": 18, "y": 1, "ability": 2, "functional": true, "idle": false, "task_id": 39},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 14, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 14, "y": 15, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 35},
      {"id": 16, "x": 5, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 35, "x": 5, "y": 4, "type": 1, "assigned": true, "assigned_to": 15}
,
      {"id": 39, "x": 14, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 52,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 17, "y": 1, "ability": 2, "functional": true, "idle": false, "task_id": 39},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 15, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 15, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 39, "x": 14, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 53,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 16, "y": 1, "ability": 2, "functional": true, "idle": false, "task_id": 39},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 16, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 7, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 10, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 39, "x": 14, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 54,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 15, "y": 1, "ability": 2, "functional": true, "idle": false, "task_id": 39},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 17, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 8, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 9, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 39, "x": 14, "y": 1, "type": 2, "assigned": true, "assigned_to": 4}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 55,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 34},
      {"id": 7, "x": 18, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 9, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 34, "x": 16, "y": 4, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 56,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 10, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 7, "ability": 2, "functional": true, "idle": false, "task_id": 37},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 1, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 37, "x": 5, "y": 6, "type": 2, "assigned": true, "assigned_to": 16}
    ]
  }
,
  {
    "tick": 57,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 18, "y": 0, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 11, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 4, "y": 7, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 2, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
    ]
  }
,
  {
    "tick": 58,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 40},
      {"id": 8, "x": 17, "y": 0, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 3, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 43},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 3, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 40, "x": 19, "y": 12, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 43, "x": 0, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 59,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 16, "y": 0, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 14, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 2, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 43},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 4, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 43, "x": 0, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 60,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 15, "y": 0, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 2, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 45},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 13, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 1, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 43},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 45, "x": 3, "y": 16, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 43, "x": 0, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 61,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 12, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 46},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 0, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 45},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 12, "ability": 3, "functional": true, "idle": false, "task_id": 41},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 43},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 6, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 41, "x": 12, "y": 11, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 45, "x": 3, "y": 16, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 43, "x": 0, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 46, "x": 16, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 62,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 13, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 46},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 7, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 46, "x": 16, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 63,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 14, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 46},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 2, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 16, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 8, "ability": 2, "functional": true, "idle": false, "task_id": 42}
    ],
    "tasks": [
      {"id": 42, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 19}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 46, "x": 16, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 64,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 15, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 46},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 15, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 48},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 48, "x": 3, "y": 12, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 46, "x": 16, "y": 15, "type": 1, "assigned": true, "assigned_to": 0}
    ]
  }
,
  {
    "tick": 65,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 14, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 14, "ability": 3, "functional": true, "idle": false, "task_id": 48},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 48, "x": 3, "y": 12, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 66,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 13, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 13, "ability": 3, "functional": true, "idle": false, "task_id": 48},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 18, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 48, "x": 3, "y": 12, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 67,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 68,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 15, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 5, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 69,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 15, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 6, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 70,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 14, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 7, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 44},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 5, "y": 4, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 44, "x": 14, "y": 10, "type": 3, "assigned": true, "assigned_to": 8}
    ]
  }
,
  {
    "tick": 71,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 13, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 6, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 15}
    ]
  }
,
  {
    "tick": 72,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 12, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 9, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 15}
    ]
  }
,
  {
    "tick": 73,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 74,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 10, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 75,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 10, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 50},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 12, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 50, "x": 10, "y": 13, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 76,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 10, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 77,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 78,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 12, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 11, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 79,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 13, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 16, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 10, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 3, "y": 12, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 10, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 80,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 14, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 17, "ability": 1, "functional": true, "idle": false, "task_id": 47},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 55},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 2, "y": 12, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 9, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 47, "x": 12, "y": 18, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 55, "x": 14, "y": 5, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 81,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 15, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 12, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 55},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 12, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 55, "x": 14, "y": 5, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 82,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 13, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 55},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 13, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 7, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 55, "x": 14, "y": 5, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 83,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 17, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 14, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 55},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 14, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 6, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": true, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 55, "x": 14, "y": 5, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 84,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 15, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 14, "y": 5, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 15, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 0, "y": 8, "ability": 3, "functional": true, "idle": true, "task_id": null},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
    ]
  }
,
  {
    "tick": 85,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 12, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 16, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 13, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": true, "idle": false, "task_id": 56},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 1, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 56, "x": 1, "y": 17, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
    ]
  }
,
  {
    "tick": 86,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 17, "y": 18, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 19, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 12, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 17, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 2, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 87,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 17, "y": 17, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 18, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 11, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 2, "ability": 3, "functional": true, "idle": false, "task_id": 54},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 3, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 54, "x": 12, "y": 1, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 11}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 88,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 9, "ability": 1, "functional": true, "idle": false, "task_id": 51},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 17, "y": 16, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 18, "y": 12, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 8, "x": 10, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 12, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 4, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 51, "x": 18, "y": 8, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 89,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 18, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 17, "y": 15, "ability": 1, "functional": true, "idle": false, "task_id": 52},
      {"id": 7, "x": 17, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 9, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 1, "y": 17, "ability": 2, "functional": true, "idle": true, "task_id": null},
      {"id": 14, "x": 11, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 5, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 52, "x": 17, "y": 14, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": false, "assigned_to": null}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 90,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 17, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 17, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 16, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 8, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 2, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 10, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 6, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 91,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 16, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 18, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 15, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 7, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 3, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 9, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 7, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 92,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 15, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 14, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 14, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 6, "y": 5, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 4, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 8, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 8, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 93,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 14, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 13, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 13, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 6, "y": 4, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 5, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 7, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 9, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 94,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 13, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 12, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 12, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 6, "y": 3, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 17, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 6, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 10, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 95,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 12, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 11, "ability": 1, "functional": true, "idle": false, "task_id": 53},
      {"id": 7, "x": 11, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 6, "y": 2, "ability": 3, "functional": true, "idle": false, "task_id": 58},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 16, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 5, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 11, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 53, "x": 19, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 58, "x": 6, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 96,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 11, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 10, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 10, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 6, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 15, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 4, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 72, "x": 4, "y": 15, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 97,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 10, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 10, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 5, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 14, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 3, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 13, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 59},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 59, "x": 14, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 72, "x": 4, "y": 15, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 98,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 9, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 10, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 4, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 13, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 2, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 14, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 61},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 72, "x": 4, "y": 15, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 99,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 8, "y": 8, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 19, "y": 10, "ability": 1, "functional": true, "idle": true, "task_id": null},
      {"id": 7, "x": 9, "y": 10, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 3, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 12, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 1, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 13, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 61},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 0}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 72, "x": 4, "y": 15, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }
,
  {
    "tick": 100,
    "grid_size": 20,
    "entities": [
      {"id": 0, "x": 8, "y": 8, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 1, "x": 17, "y": 19, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 2, "x": 4, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 3, "x": 17, "y": 12, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 4, "x": 14, "y": 1, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 5, "x": 12, "y": 8, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 6, "x": 18, "y": 10, "ability": 1, "functional": true, "idle": false, "task_id": 57},
      {"id": 7, "x": 9, "y": 9, "ability": 2, "functional": true, "idle": false, "task_id": 64},
      {"id": 8, "x": 2, "y": 1, "ability": 3, "functional": true, "idle": false, "task_id": 60},
      {"id": 9, "x": 9, "y": 6, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 10, "x": 8, "y": 8, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 11, "x": 1, "y": 16, "ability": 3, "functional": false, "idle": true, "task_id": null},
      {"id": 12, "x": 14, "y": 17, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 13, "x": 6, "y": 11, "ability": 2, "functional": true, "idle": false, "task_id": 65},
      {"id": 14, "x": 1, "y": 2, "ability": 3, "functional": true, "idle": false, "task_id": 62},
      {"id": 15, "x": 7, "y": 4, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 16, "x": 5, "y": 6, "ability": 2, "functional": false, "idle": true, "task_id": null},
      {"id": 17, "x": 12, "y": 8, "ability": 3, "functional": true, "idle": false, "task_id": 61},
      {"id": 18, "x": 17, "y": 1, "ability": 1, "functional": false, "idle": true, "task_id": null},
      {"id": 19, "x": 6, "y": 9, "ability": 2, "functional": false, "idle": true, "task_id": null}
    ],
    "tasks": [
      {"id": 57, "x": 4, "y": 10, "type": 1, "assigned": true, "assigned_to": 6}
,
      {"id": 64, "x": 9, "y": 0, "type": 2, "assigned": true, "assigned_to": 7}
,
      {"id": 65, "x": 6, "y": 9, "type": 2, "assigned": true, "assigned_to": 13}
,
      {"id": 67, "x": 4, "y": 4, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 62, "x": 1, "y": 10, "type": 3, "assigned": true, "assigned_to": 14}
,
      {"id": 60, "x": 1, "y": 1, "type": 3, "assigned": true, "assigned_to": 8}
,
      {"id": 61, "x": 3, "y": 8, "type": 3, "assigned": true, "assigned_to": 17}
,
      {"id": 66, "x": 6, "y": 12, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 68, "x": 19, "y": 11, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 69, "x": 12, "y": 17, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 70, "x": 7, "y": 18, "type": 2, "assigned": false, "assigned_to": null}
,
      {"id": 71, "x": 12, "y": 18, "type": 3, "assigned": false, "assigned_to": null}
,
      {"id": 72, "x": 4, "y": 15, "type": 2, "assigned": false, "assigned_to": null}
    ]
  }

];
