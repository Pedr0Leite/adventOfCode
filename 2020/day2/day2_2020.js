var fs = require("fs");
var read = fs.readFileSync("day2_2020_input.txt");
var part1 = require('./day2_2020_utils').part1;
var part2 = require('./day2_2020_utils').part2;
var data = read.toString().split("\r\n");
var dataMapped = data.map(x=> x.replace(":","").split(" "));

// var test = ["1-3 a: abcde","1-3 b: cdefg","2-9 c: ccccccccc"];
// var testMapped = test.map(x=> x.replace(":","").split(" "));

//Part 1
// console.log('Part1: ' + part1(testMapped));
console.log('Part1: ' + part1(dataMapped));

//Part 2
// console.log('Part2: ' + part2(testMapped));
console.log('Part2: ' + part2(dataMapped));