var fs = require("fs");
var read = fs.readFileSync("day1_2022_input.txt");
var part1 = require('./day1_2022_utils').part1;
var part2 = require('./day1_2022_utils').part2;
var data = read.toString().split("\r\n");

//part 1
// part1(data);
// console.log('part1 :', part1(data));

// //part2
part2(data)
console.log('part2 :', part2(data));

