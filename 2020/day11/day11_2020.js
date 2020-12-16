var _ = require("underscore");
var fs = require("fs");
var read = fs.readFileSync("day11_2020_input.txt");
var readTest = fs.readFileSync("day11_2020_input_test.txt");
var day11 = require('./day11_2020_utils').day11;
// var part2 = require('./day11_2020_utils').part2;
var data = read.toString().split("\r\n");
var dataTest = readTest.toString().split("\r\n");
// console.log('dataTest :', dataTest);

//Part 1
console.log(day11(dataTest));
// console.log(day11(data));



//Part 2
// console.log('result 2: ' + day11(data));
// console.log('result 2_II: ' + day11(data));
// L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL