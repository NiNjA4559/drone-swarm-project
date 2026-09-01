// Input Format

/*
1. grid_size(n) entity_count(k) communication_range(R) number_of_ticks(t)
    k lines having (ability_i x_i y_i) representing the ability of the entity i and its location at t = 0
for all t in [1, t]:
2. q (followed by q lines containing one of the three types of queries on all q lines)
    1 i (Loss of ith entity)
    2 x y (New task available at (x, y))
    3 i x y (ith entity that was lost previously is found working at (x, y))
*/

const fs = require("fs");

let inputText = "";

const n = 5 //Math.floor(Math.random() * 26) + 25;
const k = 5 //Math.floor(Math.random(n * n));
const R = 2;
const t = 10;

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

for(let el of points) {
    let arr = el.split(",").map(Number);
    //console.log(Math.floor(Math.random() * 3) + 1, arr[0], arr[1]);
    inputText += [Math.floor(Math.random() * 3) + 1, arr[0], arr[1]].join(" ") + "\n";
}
let lost_entities = {};
for(let i = 0; i < t; i++) {
    let p = Math.floor(Math.random() * 3) + 1;

    //console.log(p)
    inputText += p + "\n";

    for(let j = 0; j < p; j++) {
        let qtype = Math.floor(Math.random() * 2) + 1;
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
            inputText += [qtype, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * n), Math.floor(Math.random() * n)].join(" ") + "\n";

        } else if(qtype == 3) {
            // implement it later cuz then i will have to check if the come backies location is already occupied or not
            /*return;
            let losties = Object.keys(lost_entities);
            let random_come_backies = losties[Math.floor(Math.random() * losties.length)];

            console.log(random_come_backies, Math.floor(Math.random() * n), Math.floor(Math.random() * n))*/
        }
    }
}

fs.writeFileSync('../input.txt', inputText);
