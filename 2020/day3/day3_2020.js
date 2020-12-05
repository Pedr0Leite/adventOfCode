var _ = require("underscore");
var fs = require("fs");
var read = fs.readFileSync("day3_2020_input.txt");
var readTest = fs.readFileSync("day3_2020_input_test.txt");
var part1 = require('./day3_2020_utils').part1;
var part2 = require('./day3_2020_utils').part2;
var part2_II = require('./day3_2020_utils').part2_II;
var data = read.toString().split("\r\n");
var dataTest = readTest.toString().split("\r\n");
// console.log('dataTest :', dataTest[0].length);

//Part 1
// console.log(part1(dataTest));
// console.log(part1(data));



//Part 2
console.log('result 2: ' + part2(data));
console.log('result 2_II: ' + part2_II(data));

