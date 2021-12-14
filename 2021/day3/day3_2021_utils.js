const part1 = (data) => {
//most common number
const gamaRate = {};
//lest common number
const epsilonRate = {};

const numberOfelements = data[0].length;
let counter = 0;

while(counter < numberOfelements){
    let tempCount = {zero:0, one:0};
    let tempData = data.map(x => x.slice(counter, counter + 1));
    
    tempData.forEach(value => {
        value == '1' ? tempCount.one++ : tempCount.zero++;
    });
    
    if(tempCount.one > tempCount.zero){
        gamaRate[counter] = 1;
        epsilonRate[counter] = 0;
    } else{
        gamaRate[counter] = 0;
        epsilonRate[counter] = 1;
        
    }
    counter++
}

//Convert Binary to Numeric
const gamaNumber = parseInt(Object.values(gamaRate).join(''), 2);
const epsilonRateNumber = parseInt(Object.values(epsilonRate).join(''), 2);

const finalValue = gamaNumber * epsilonRateNumber;

return finalValue

}

const part2 = (data) =>{
//most common number
const gamaRate = {};
//lest common number
const epsilonRate = {};

// data.forEach(x =>{

// })
let tempCount = {zero:0, one:0};
let counter = 0;

console.log(data[0].split('').reduce((prev, curr) =>{
    var count = prev[curr] || 0;
    prev[curr] = count + 1;
    return prev;
}, {}))
console.log(data[0])


}

module.exports = { part1, part2 }