var fs = require("fs");
var read = fs.readFileSync("day9_2020_input.txt");
var readTest_p1 = fs.readFileSync("day9_2020_input_test.txt");
var day9 = require('./day9_2020_utils.js').day9;
var day9_part2 = require('./day9_2020_utils.js').day9_part2;
var data = read.toString().split("\r\n").map(x => +x); 
var dataTest_p1 = readTest_p1.toString().split("\r\n").map(x => +x);


// //Part1
// console.log('PART1: ' + day9(dataTest_p1));
console.log('PART1: ' + day9(data));
//Part2
// console.log('PART2: ' + day9_part2(dataTest_p1));
console.log('PART2: ' + day9_part2(data));