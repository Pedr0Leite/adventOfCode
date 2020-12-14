function getAcc(dataset) {
  const regex = /(\w.*) (.*\D)(\d{1,10})/;
  let acc = 0;
  let index = 0;
  let arrIndex = [];
  let arrIndexSet = new Set();
  let answer = false;
  let accPartII = 0;
  let answerPart2 = false;

  // console.log("Starting the code at: " + new Date());
  while (!answer) {
    // while(!arrIndexSet.has(index)){
    let [_, letters, symbol, number] = regex.exec(dataset[index]);
    arrIndex.push(index);
    arrIndexSet.add(index);
    if (letters == "nop") {
      index++;
    } else if (letters == "jmp") {
      symbol == "-" 
      ? (index = index - +number) 
      : (index = index + +number);
    } else if (letters == "acc") {
      symbol == "-"
        ? (acc = acc - +number)
        : (acc = acc + +number);
        index++;
      }

      if (arrIndex.indexOf(index) !== -1) {
        answer = true;
      }
      if(index == dataset.length){
        accPartII = acc;
        answerPart2 = true;
        answer = true;
      }
      //OR sets are quicker than arr operations
      // if(arrIndexSet.has(index)){
        //   answer = true;
        // }
        // console.log('acc :', acc);
  }
  return [acc, answerPart2, accPartII];
}

const day8 = (dataset) => {
  let part1 = getAcc(dataset);
  // console.log('part1 :', part1);
  let datasetLength = dataset.length;
  
  let nopIndex = dataset.reduce((acc, curr, index) => {
    curr.substr(0, 3) === "nop" ? acc.push(index) : null;
    return acc;
  }, []);
  let jmpIndex = dataset.reduce((acc, curr, index) => {
    curr.substr(0, 3) === "jmp" ? acc.push(index) : null;
    return acc;
  }, []);

  let part2 = [];
  
  jmpIndex.forEach(value=>{
    dataset[value] = dataset[value].replace('jmp', 'nop');
    let testArr = getAcc(dataset);
    (testArr[1] === true) ? (part2.push(testArr[2])) : (dataset[value] = dataset[value].replace('nop', 'jmp'));
  });
  //846 -> correct
  

  return [part1, part2[0]];
};

module.exports = {
  day8,
};
