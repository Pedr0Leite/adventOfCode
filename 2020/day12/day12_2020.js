var fs = require("fs");
var read = fs.readFileSync("day12_2020_input.txt");
var readTest = fs.readFileSync("day12_2020_input_test.txt");
var day12 = require('./day12_2020_utils').day12;
// var part2 = require('./day11_2020_utils').part2;
var data = read.toString().split("\r\n");
var dataTest = readTest.toString().split("\r\n");
// console.log('dataTest :', dataTest);

//Part 1
// console.log(day12(dataTest));
console.log(day12(data));
