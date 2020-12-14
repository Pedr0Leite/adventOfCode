var fs = require("fs");
var read = fs.readFileSync("day7_2020_input.txt");
var readTest_p1 = fs.readFileSync("day7_2020_input_test.txt");
// var part1 = require('./day7_2020_utils').part1;
var part1_2 = require('./day7_2020_utils').part1_2;
var data = read.toString().split("\r\n");
var dataTest_p1 = readTest_p1.toString().split("\r\n");
// console.log('dataTest_p1 :', dataTest_p1);


// //Part1
// console.log('PART1 B: ' + part1_2(dataTest_p1));
console.log('PART1 B: ' + part1_2(data)[0]);

//Part2
console.log('PART2: ' + part1_2(dataTest_p1)[1]);
console.log('PART2: ' + part1_2(data)[1]);