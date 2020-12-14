var fs = require("fs");
var read = fs.readFileSync("day8_2020_input.txt");
var readTest_p1 = fs.readFileSync("day8_2020_input_test.txt");
var day8 = require('./day8_2020_utils.js').day8;
var data = read.toString().split("\r\n"); //663 length
var dataTest_p1 = readTest_p1.toString().split("\r\n");
// console.log('dataTest_p1 :', dataTest_p1);

// //Part1
// console.log('PART1: ' + day8(dataTest_p1)[0]);
// console.log('PART1: ' + day8(data)[0]);
//Part2
console.log('PART2: ' + day8(dataTest_p1)[1]);
// console.log('PART2: ' + day8(data)[1]);