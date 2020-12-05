var fs = require("fs");
var read = fs.readFileSync("day4_2020_input.txt");
var readTest_p1 = fs.readFileSync("day4_2020_input_test_part1.txt");
var readTest_p2 = fs.readFileSync("day4_2020_input_test_part2.txt");
var part1_part2 = require('./day4_2020_utils').part1_part2;
var data = read.toString().split("\r\n");
var dataTest_p1 = readTest_p1.toString().split("\r\n");
var dataTest_p2 = readTest_p2.toString().split("\r\n");


//Result
// console.log(part1_part2(dataTest_p1));
// console.log(part1_part2(dataTest_p2));
console.log(part1_part2(data));
