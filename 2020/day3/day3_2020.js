var fs = require("fs");
var read = fs.readFileSync("day3_2020_input.txt");
var readTest = fs.readFileSync("day3_2020_input_test.txt");
var day3 = require('./day3_2020_utils').day3;
var day3_II = require('./day3_2020_utils').day3_II;
var data = read.toString().split("\r\n");
var dataTest = readTest.toString().split("\r\n");


//Part 1
console.log('result 2: ' + day3(data));
//Part 2
console.log('result 2_II: ' + day3_II(data));

