var _ = require('underscore');
var fs = require('fs');
var read = fs.readFileSync("input_day4_2019.txt");
var data = read.toString().split("-");

// console.log(data);

var valueOne = parseInt(data[0]);
// console.log('valueOne :', valueOne);
var valueTwo = parseInt(data[1]);
// console.log('valueTwo :', valueTwo);


var range = _.range(valueOne, valueTwo);
range = range.toString().split(',');
// console.log('range :', range);
// console.log('range :', range.length);

// var testArr = ['193651','193659','193675','193709','222222',
//  '444245', '122225','193727','113456','111111', '222226', 
//  '193651', '649729', '485729', '857663', '553456', '112233', '123444', '111122'];

 
var testArr = ['011222'];
// console.log('testArr :', testArr);

// console.log(testArr[0][1]);

function sort(value) {
    let real = value.split("");
    let sort = value.split("").sort();
    let answer = real.toString() === sort.toString() ? true : false;
    return answer;
}
function findPassword(params) {
    let arr = [];
    for(var i = 0; i < params.length; i++){
    const regex = /([0-9])\1{1,}/g;
    // const regex = /([0-9])\1/g; //Part 2
    let regexTest = regex.test(params[i]);
    if(regexTest == true && sort(params[i]) == true){
        arr.push(params[i]);
    }
    }
    return arr;
}
var result_part1 = findPassword(range);
var result_test = findPassword(testArr);
// console.log('result_test :', result_test);
// console.log('result_part1 :', result_part1);
// console.log('findPassword :', result_part1.length);

function findPassword_part2(params) {
    var arr2 = [];
    var arr3 = [];
    for(var i = 0; i < params.length; i++){
        const regex = /([0-9])\1{2,}/g;
        let regexTest = regex.test(params[i]);
    if(regexTest == false){
        arr2.push(params[i]);
        
    }
    // for(var j = 0; j < arr2.length; j++){
    //     const regex = /([0-9])\1{2}/g;
    //     let regexTest = regex.test(params[i]);
    // if(regexTest == true){
    //     arr3.push(arr2[j]);
    // }
    }
    return arr2;
    }

// var result_part2 = findPassword_part2(result_part1);
// console.log('findPassword_part2 :', result_part2);
// console.log('findPassword_part2 :', findPassword_part2(result_test));


function secondTry(value) {
    let arr1 = [];
    for(i = 0; i < value.length; i++){
        let temp = [];
        for(j = 0; j < value[i].length; j++){
            if(value[i][j] === value[i][j+1]){
                temp.push(value[i][j]);
                console.log('temp :', temp);
            }
        }
        // let temp2 = _.uniq(temp);
        // console.log('temp :', temp);
        // console.log('temp2 :', temp2);
        if(checkUniq(temp)){
            arr1.push(value[i])
        }
    }
    return arr1;
    console.log('arr1 :', arr1);
    
}

var result_part2 = secondTry(result_part1);
console.log('result_part2 :', result_part2.length);
// var result_part2 = secondTry(result_test);
// console.log('result_part2 :', result_part2);


function checkUniq(params) {
    for(var i = 0; i < params.length; i++){
        if(i == 0 && params[i] != params[i+1]){
            return true;
        }else if(i == params.length - 1 && params[i - 1] != params[i]){
            return true;
        }
    }
    return false;
}