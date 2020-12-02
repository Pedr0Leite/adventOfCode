var _ = require("underscore");
var fs = require("fs");
var read = fs.readFileSync("day2_2018_input.txt");
var data = read.toString().split("\r\n");
// console.log(data);

//-----Part 1----------
function countLetters(string) {
  var result = [...string].reduce((letter, i) => {
    letter[i] = letter[i] ? letter[i] + 1 : 1;
    return letter;
  }, {});
  return result;
}

let twice = [];
let thrice = [];
let twoANDthree = [];

data.forEach((x) => {
  let letters = countLetters(x);
  let lettersValues = Object.values(letters);
  if (lettersValues.includes(2) && lettersValues.includes(3)) {
    twoANDthree.push(x);
    twice.push(x);
    thrice.push(x);
  } else if (lettersValues.includes(2)) {
    twice.push(x);
  } else if (lettersValues.includes(3)) {
    thrice.push(x);
  }
});


//-----Part 2----------

function hammingDistance(x, y) {
  var distCounter = 0;
  for (const letter in [...x]) {
    if (x[letter] !== y[letter]) {
      distCounter += 1;
    }
  }
  return distCounter;
}

let strings = [];
data.forEach((valueX) => {
  data.forEach((valueY) => {
    let distance = hammingDistance(valueY, valueX);
    if (distance == 1) {
      strings.push(valueY);
    }
  });
});

let final = [];
let valA = [...strings[0]];
let valB = [...strings[1]];
for (const x in valA) {
  if (valA[x] === valB[x]) {
    final.push(valA[x]);
  }
}
console.log("final :", final.join(""));
