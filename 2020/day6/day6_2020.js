var fs = require("fs");
var read = fs.readFileSync("day6_2020_input.txt");
var readTest_p1 = fs.readFileSync("day6_2020_input_test.txt");
var part1 = require('./day6_2020_utils').part1;
var part2 = require('./day6_2020_utils').part2;
var data = read.toString().split("\r\n");
var dataTest_p1 = readTest_p1.toString().split("\r\n");


// //Part1
// console.log('PART1: ' + part1(dataTest_p1));
console.log('PART1: ' + part1(data));
//Part2
// console.log('PART2: ' + part2(dataTest_p1));
console.log('PART2: ' + part2(data));

