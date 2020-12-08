function fixLines(arr){
    let tempString = "";
    let tempArr = [];
    arr.forEach((line,index)=>{
        if(line != ''){
            (tempString == "") ? (tempString = tempString + line) : ( tempString = tempString +  " " + line);
            if(index == arr.length - 1){tempArr.push(tempString)};

        }else if(line == ''){
            tempArr.push(tempString)
            tempString = "";
        }
    })
    return tempArr
}

function countOccur(arr) {
    return arr.reduce(function (acc, curr) {
        (typeof acc[curr] == 'undefined') ? (acc[curr] = 1) : (acc[curr] += 1);
        return acc;
    }, {});
}


const part1 = (dataset) => {
    let tempArr = fixLines(dataset);
    let firstMap = tempArr.map(x=> x.split('').filter(v => v != ' '));
    let secondMap = firstMap.map(y=>[...new Set(y)].join('').length)
    return secondMap.reduce((a,b)=> a + b, 0);
};

const part2 = (dataset) =>{
    console.log('Starting to run the code at: ' + Date());
    let tempArr = fixLines(dataset);
    let values = [];
    tempArr.forEach(line=>{
        let whiteSpace = 0;
        let objOfOccur = countOccur([...line]);
        (objOfOccur[' '] == undefined) ? whiteSpace = 1 : whiteSpace = objOfOccur[' '] + 1;
        const filteredByValue = Object.keys(objOfOccur).filter(i => objOfOccur[i] === whiteSpace)
        values.push(filteredByValue.length);
    })
    return values.reduce((a,b)=> a + b, 0);
}


module.exports = {
    part1,
    part2
  };
  