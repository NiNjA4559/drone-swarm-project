// Input Format

/*
1. grid_size(n) entity_count(k) communication_range(R) number_of_ticks(t)
    k lines having (ability_i x_i y_i) representing the ability of the entity i and its location at t = 0
for all t in [1, t]:
2. q (followed by q lines containing supported query types)
    1 i (Loss of ith entity)
    2 task_id w x y (New task of type w available at (x, y))

Recovery queries (type 3) are not supported by this release.
*/

const fs = require("fs");
const path = require("path");

let inputText = "";

const n = 25 //Math.floor(Math.random() * 26) + 25;
const k = 21 //Math.floor(Math.random(n * n));
const R = 7;
const t = 150;

let obj = {};
for(let i = 0; i < n; i++) {
    obj[i] = {};
}
let points = new Set();

while(points.size < k) {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);
    points.add(`${x},${y}`);
}

//console.log(n, k, R, t);
inputText += [n, k, R, t].join(" ") + "\n";

let droneIndex = 0;
for(let el of points) {
    let arr = el.split(",").map(Number);
    const ability = (droneIndex++ % 3) + 1;
    //console.log(ability, arr[0], arr[1]);
    inputText += [ability, arr[0], arr[1]].join(" ") + "\n";
}
let lost_entities = {};
let next_task_id = 0;
for(let i = 0; i < t; i++) {
    const queryRoll = Math.random();
    let p = queryRoll < 0.4 ? 0 : queryRoll < 0.8 ? 1 : 2;

    //console.log(p)
    inputText += p + "\n";

    for(let j = 0; j < p; j++) {
        let qtype;
        const canLoseEntity = Object.keys(lost_entities).length < k;

        if(canLoseEntity) {
            qtype = Math.random() < 0.2 ? 1 : 2;
        } else {
            qtype = 2;
        }

        if(qtype == 1 && Object.keys(lost_entities).length == k) qtype++;
        if(qtype == 1) {
            let lost_pos = Math.floor(Math.random() * (k - Object.keys(lost_entities).length));
            let lost_id = -1;
            for(let i = 0; i < k; i++) {
                if(lost_entities[i] != 1) {
                    if(!lost_pos) {
                        lost_id = i;
                        break;
                    }
                    lost_pos--;
                } else {
                    continue;
                }
            }
            lost_entities[lost_id] = 1;
            
            //console.log(qtype, lost_id);
            inputText += [qtype, lost_id].join(" ") + "\n";

        } else if(qtype == 2) {
            
            //console.log(qtype, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * n), Math.floor(Math.random() * n))
            inputText += [
                qtype,
                next_task_id++,
                Math.floor(Math.random() * 3) + 1,
                Math.floor(Math.random() * n),
                Math.floor(Math.random() * n)
            ].join(" ") + "\n";

        }
    }
}

const outputPath = process.argv[2] || path.join(__dirname, "../input.txt");
fs.writeFileSync(outputPath, inputText);
