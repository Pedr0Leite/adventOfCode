var fs = require("fs");
var read = fs.readFileSync("day10_2020_input.txt");
var readTest_p1 = fs.readFileSync("day10_2020_input_test.txt");
var day10 = require('./day10_2020_utils.js').day10;
var day10_part2 = require('./day10_2020_utils.js').day10_part2;
var data = read.toString().split("\r\n").map(x => +x); 
var dataTest_p1 = readTest_p1.toString().split("\r\n").map(x => +x);
// console.log('dataTest_p1 :', dataTest_p1);


// //Part1
// console.log('PART1: ' + day10(dataTest_p1));
// console.log('PART1: ' + day10(data));
// 
//Part2
console.log('PART2: ' + day10_part2(dataTest_p1));
// console.log('PART2: ' + day10_part2(data));

// 28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3

// 16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4