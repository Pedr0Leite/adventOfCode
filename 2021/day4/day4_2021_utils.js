function multiply(a, b) {
  return a * b;
}

const part1 = (data) => {
  //The sequence
  const sequence = data.shift().split(',');

  //remove the ''
  const boards = data.filter((x) => {
    return x != "";
  });

  let arrOfObj = [];
  let tempObj = {};
  let tempArr = [];
  let count = 0;

  for (var i = 0; i < boards.length; i++) {
    let name = "line" + count;
    let line = boards[i].split(" ").filter((x) => {
      return x != "";
    });
    tempObj[name] = line;
    count++;

    if (Object.values(tempObj).length == 5) {
      arrOfObj.push(tempObj);
      tempArr = [];
      count = 0;
      tempObj = {};
    }
  }

  let winningLine = [];
  let restLines = [];
  let lastNumber;
  //For Each sequence number, remove it from the array line
  Array.from(sequence).forEach((number) => {
    //for each bingo card
    arrOfObj.forEach((card) => {
      //for each line on a cord
      for (var line of Object.keys(card)) {
        //If the number exists on a line
        let indexOfNumber = card[line].indexOf(number);
        if (indexOfNumber != -1) {
          card[line][indexOfNumber] = number + 'X';
        }
      }

      let column0 = [card.line0[0], card.line1[0],card.line2[0],card.line3[0],card.line4[0]];
      let column1 = [card.line0[1], card.line1[1],card.line2[1],card.line3[1],card.line4[1]];
      let column2 = [card.line0[2], card.line1[2],card.line2[2],card.line3[2],card.line4[2]];
      let column3 = [card.line0[3], card.line1[3],card.line2[3],card.line3[3],card.line4[3]];
      let column4 = [card.line0[4], card.line1[4],card.line2[4],card.line3[4],card.line4[4]];

      //column conditions
      let columnCondition0 = winningLine.length == 0 && column0.every((el) => el.includes('X'));
      let columnCondition1 = winningLine.length == 0 && column1.every((el) => el.includes('X'));
      let columnCondition2 = winningLine.length == 0 && column2.every((el) => el.includes('X'));
      let columnCondition3 = winningLine.length == 0 && column3.every((el) => el.includes('X'));
      let columnCondition4 = winningLine.length == 0 && column4.every((el) => el.includes('X'));

      //line conditions
      let lineCondition0 = winningLine.length == 0 && card.line0.every((el) => el.includes('X'));
      let lineCondition1 = winningLine.length == 0 && card.line1.every((el) => el.includes('X'));
      let lineCondition2 = winningLine.length == 0 && card.line2.every((el) => el.includes('X'));
      let lineCondition3 = winningLine.length == 0 && card.line3.every((el) => el.includes('X'));
      let lineCondition4 = winningLine.length == 0 && card.line4.every((el) => el.includes('X'));

      if(lineCondition0 || columnCondition0){
        lastNumber = number;
        lineCondition0 ? winningLine.push(...card.line0) : winningLine.push(...column0);
        lineCondition0 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition0 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition0 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition0 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition1 || columnCondition1){
        lastNumber = number;
        lineCondition1 ? winningLine.push(...card.line1) : winningLine.push(...column1);
        lineCondition1 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition1 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition1 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition1 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition2 || columnCondition2){
        lastNumber = number;
        lineCondition2 ? winningLine.push(...card.line2) : winningLine.push(...column2);
        lineCondition2 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition2 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition2 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition2 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition3 || columnCondition3){
        lastNumber = number;
        lineCondition3 ? winningLine.push(...card.line3) : winningLine.push(...column3);
        lineCondition3 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition3 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition3 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition3 ? restLines.push(...card.line4) : restLines.push(...column3);
      }
      else if(lineCondition4 || columnCondition4){
        lastNumber = number;
        lineCondition4 ? winningLine.push(...card.line4) : winningLine.push(...column4);
        lineCondition4 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition4 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition4 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition4 ? restLines.push(...card.line3) : restLines.push(...column3);
      }
    });
  });
  
// winningLine = winningLine.map(val => val = val.replace('X',''));
restLines = restLines.filter(val => {return !val.includes('X')});

// console.log(winningLine.reduce((prev, curr) => {return +prev + +curr}, 0));
let sumOfAllUnmarked = restLines.reduce((prev, curr) => {return Number(prev) + Number(curr)}, 0);

const result = Number(sumOfAllUnmarked * lastNumber);
// console.log('result :', result);
return result;

};

const part2 = (data) => {};

module.exports = { part1, part2 };