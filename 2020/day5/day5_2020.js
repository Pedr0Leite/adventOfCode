var fs = require("fs");
var read = fs.readFileSync("day5_2020_input.txt");
var readTest_p1 = fs.readFileSync("day5_2020_input_test_part1.txt");
// var readTest_p2 = fs.readFileSync("day5_2020_input_test_part2.txt");
var part1 = require('./day5_2020_utils').part1;
var part2 = require('./day5_2020_utils').part2;
var data = read.toString().split("\r\n");
var dataTest_p1 = readTest_p1.toString().split("\r\n");
// console.log('dataTest_p1 :', dataTest_p1[0].length);
// var dataTest_p2 = readTest_p2.toString().split("\r\n");


//Part1
console.log(part1(data));
//Part2
console.log(part2(data));
