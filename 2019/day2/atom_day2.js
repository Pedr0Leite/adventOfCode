//Part 1
var fs = require('fs');
var read = fs.readFileSync("input_day2_2019.txt");
var data = read.toString().split(",").map(Number);
console.log(typeof data[0]);

var opcode = data.slice(0);

// var opcode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,
//   47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,
//   1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

opcode.splice(1,1,12);
opcode.splice(2,1,2);

function calc(array) {
for(var i = 0; i < array.length; i+=4){
  var i_add = 1;
  var i_multiply = 2;
  var i_stop = 99;
  let a = array[i+1];
  let b = array[i+2];
  let c = array[i+3];

  if(array[i] == i_add){
      array[c] = array[a] + array[b];
  }else if(array[i] == i_multiply){
      array[c] = array[a] * array[b];
  }else if(array[i] == i_stop){
    break;
  }
}
return array[0];
}

console.log(calc(opcode));

//Part 2
let opcode_part2 = data.slice(0);

function calc_part2(array) {
  for(var verb = 0; verb < 100; verb++){
    for(var noun = 0; noun < 100; noun++){
      let potato = array.slice(0)
      potato[1] = noun;
      potato[2] = verb;
      if(calc(potato) === 19690720){
        return (100 * noun + verb);
      }
      if(calc(potato) >19690720) {
        break;
      }
      // console.log(calc(potato))
    }
  }
}

console.log(calc_part2(opcode_part2));
