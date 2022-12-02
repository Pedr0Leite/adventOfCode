const part1 = (data) => {
    let tempArr = [];
    let tempVal = 0;
    data.forEach(val => {
        if (val == '') {
            tempArr.push(tempVal)
            tempVal = 0;
        } else {
            tempVal += Number(val);
        }
        
    })
    return Math.max(...tempArr);
}

const part2 = (data) => {
    let tempArr = [];
    let tempVal = 0;
    data.forEach(val => {
        if (val == '') {
            tempArr.push(tempVal)
            tempVal = 0;
        } else {
            tempVal += Number(val);
        }
        
    })

    var sorted = tempArr.sort((a,b) => b - a);
    return sorted.splice(0, 3).reduce((prev, curr) => prev + curr, 0);
}

module.exports = { part1, part2 }