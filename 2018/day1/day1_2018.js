var fs = require('fs');
var read = fs.readFileSync("day1_2018_input.txt");
var data = read.toString().split(",").map(Number);
// console.log(data);
//---------PART 1----------------
var frequency = data.reduce((a,b)=> a+b,0);
// console.log(frequency);

//---------PART 2----------------
const increment = (x,y) => [...x, x[x.length - 1] + y];
function getKeyByValue(obj, value){
    return Object.keys(obj).find(key => obj[key] === value);
}
var allIncrement = data.reduce(increment,[0]);

function duplicateFreq(arrOfFreq){
var sumOfFreq = 0;
var freqFound = new Set();
let found;

while(!found){
    for(const freq of arrOfFreq){
        sumOfFreq += Number(freq);
        if(freqFound.has(sumOfFreq)){
            found = true;
            return sumOfFreq;
        }else{
            freqFound.add(sumOfFreq);
        }
    }
}
}

console.log('Just Data: ' + duplicateFreq(data)); //correct answer 566
