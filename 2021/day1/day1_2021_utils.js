const part1 = (data) => {
    //Both ways are correct, filter requires less one line.
    //let count = 0;
    //const processCount = data.map(x => Number(x)).forEach((y, i)=> { y > data[i - 1] ? count++ : 0 })
    
    return processCount2 = data.map(x => Number(x)).filter((y, i) => y > data[i - 1]).length;
}

const part2 = (data) =>{
    let count = 0;
    const countTrios = (arr) => {
        return (arr.map(x => Number(x)).reduce((prev, curr) => prev + curr, 0));
    }

    data.forEach((y,i) => countTrios(data.slice(i , i + 3)) < countTrios(data.slice(i + 1 , i + 4)) ? count++ : 0);
    return count;
}

module.exports = { part1, part2 }