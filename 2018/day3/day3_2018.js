var _ = require("underscore");
var fs = require("fs");
var read = fs.readFileSync("day3_2018_input.txt");
let regex = /(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
var data = read.toString().split("\r\n");
// console.log(data);
//-----Part 1----------
//organize information
let dataMap = data.map((x) => regex.exec(x));

let claims = [];
let overlaps = [];
let countOverlaps = 0;


// //create fabric
for (let i = 0; i <= 1000; i++) {
    claims[i] = [];
    overlaps[i] = [];
}

//fabric overlaps count
dataMap.forEach((info) => {
    let id = +info[1]; //+ or Number() are the same
    let left = +info[2];
    let top = +info[3];
    let wide = +info[4];
    let tall = +info[5];

    for (let x = left; x < left + wide; x++) {
      //for each X coordinate
      for (let y = top; y < top + tall; y++) {
          //for each Y coordinate
          if (claims[x][y]) {
              //if coordinate exist
        if (!overlaps[x][y]) {
            overlaps[x][y] = true;
            countOverlaps++;
        }
    } else {
        claims[x][y] = true;
    }
}
}
});

// console.log("countOverlaps :", countOverlaps);
//-----Part 2----------

//organize information
// let dataMap = data.map((x) => regex.exec(x));

let claims_part2 = [];
let overlaps_part2 = [];
let countOverlaps_part2 = 0;
let claimsOrganized = [];
let idNotOverlapped = [];

// //create fabric
for (let i = 0; i <= 1000; i++) {
    claims_part2[i] = [];
    overlaps_part2[i] = [];
}

//fabric overlaps count
dataMap.forEach((info) => {
    let id = +info[1]; //+ or Number() are the same
    let left = +info[2];
    let top = +info[3];
    let wide = +info[4];
    let tall = +info[5];

    claimsOrganized.push({id, left, top, wide, tall});

    for (let x = left; x < left + wide; x++) {
      for (let y = top; y < top + tall; y++) {
          if (claims_part2[x][y]) {
        if (!overlaps_part2[x][y]) {
            overlaps_part2[x][y] = true;
            countOverlaps_part2++;
        }
    } else {
        claims_part2[x][y] = true;
    }
}
}
});

claimsOrganized.forEach(value=>{
    let claimID = +value[1]; //+ or Number() are the same
    let claimLeft = +value[2];
    let claimTop = +value[3];
    let claimWide = +value[4];
    let claimTall = +value[5];
    for (let x = claimLeft; x < claimLeft + claimWide; x++) {
        for (let y = claimTop; y < claimTop + claimTall; y++) {
            if (overlaps[x][y]) {
                idNotOverlapped.push(claimID)
            }
        }
    }
    });

console.log('claimsOrganized :', claimsOrganized.length);
console.log('idNotOverlapped :', idNotOverlapped);