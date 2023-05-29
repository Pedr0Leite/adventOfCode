const part1 = (data) => {
  //The sequence
  const sequence = data.shift().split(',');

  //remove the ''
  const boards = data.filter((x) => {
    return x != "";
  });

  let arrOfObj = [];
  let tempObj = {};
  let count = 0;

  // Build the boards
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

  // let winningLine = []; --> this is not used
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
        // lineCondition0 ? winningLine.push(...card.line0) : winningLine.push(...column0);
        lineCondition0 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition0 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition0 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition0 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition1 || columnCondition1){
        lastNumber = number;
        // lineCondition1 ? winningLine.push(...card.line1) : winningLine.push(...column1);
        lineCondition1 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition1 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition1 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition1 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition2 || columnCondition2){
        lastNumber = number;
        // lineCondition2 ? winningLine.push(...card.line2) : winningLine.push(...column2);
        lineCondition2 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition2 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition2 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition2 ? restLines.push(...card.line4) : restLines.push(...column4);
      }
      else if(lineCondition3 || columnCondition3){
        lastNumber = number;
        // lineCondition3 ? winningLine.push(...card.line3) : winningLine.push(...column3);
        lineCondition3 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition3 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition3 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition3 ? restLines.push(...card.line4) : restLines.push(...column3);
      }
      else if(lineCondition4 || columnCondition4){
        lastNumber = number;
        // lineCondition4 ? winningLine.push(...card.line4) : winningLine.push(...column4);
        lineCondition4 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition4 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition4 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition4 ? restLines.push(...card.line3) : restLines.push(...column3);
      }
    });
  });
  
// Remove X from numbers
restLines = restLines.filter(val => {return !val.includes('X')});

// Count of all non marked numbers
let sumOfAllUnmarked = restLines.reduce((prev, curr) => {return Number(prev) + Number(curr)}, 0);

const result = Number(sumOfAllUnmarked * lastNumber);

return result;

};

const part2 = (data) => {
  //The sequence
  const sequence = data.shift().split(',');

  //remove the ''
  const boards = data.filter((x) => {
    return x != "";
  });

  let arrOfObj = [];
  let tempObj = {};
  let count = 0;

  // Build the boards
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

  // let winningLine = []; --> this isnt used
  let restLines = [];
  let lastNumber;
  let winningBoards = [];

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
      
      // let columnCondition0;
      // let columnCondition1;
      // let columnCondition2;
      // let columnCondition3;
      // let columnCondition4;

      // let lineCondition0;
      // let lineCondition1;
      // let lineCondition2;
      // let lineCondition3;
      // let lineCondition4;

      // // Check if any line was deleted
      // if(card.line0 != undefined){
      //   let column0 = [card.line0[0], card.line1[0],card.line2[0],card.line3[0],card.line4[0]];
      //   columnCondition0 = column0.every((el) => el.includes('X'));
      //   lineCondition0 = card.line0.every((el) => el.includes('X'));
      
      // }
      // if(card.line1 != undefined){
      //   let column1 = [card.line0[1], card.line1[1],card.line2[1],card.line3[1],card.line4[1]];
      //   columnCondition1 = column1.every((el) => el.includes('X'));
      //   lineCondition1 = card.line1.every((el) => el.includes('X'));
      
      // }
      // if(card.line2 != undefined){
      //   let column2 = [card.line0[2], card.line1[2],card.line2[2],card.line3[2],card.line4[2]];
      //   columnCondition2 = column2.every((el) => el.includes('X'));
      //   lineCondition2 = card.line2.every((el) => el.includes('X'));
      
      // }
      // if(card.line3 != undefined){
      //   let column3 = [card.line0[3], card.line1[3],card.line2[3],card.line3[3],card.line4[3]];
      //   columnCondition3 = column3.every((el) => el.includes('X'));
      //   lineCondition3 = card.line3.every((el) => el.includes('X'));
      
      // }
      // if(card.line4 != undefined){
      //   let column4 = [card.line0[4], card.line1[4],card.line2[4],card.line3[4],card.line4[4]];
      //   columnCondition4 = column4.every((el) => el.includes('X'));
      //   lineCondition4 = card.line4.every((el) => el.includes('X'));
      
      // }


      let column0 = [card.line0[0], card.line1[0],card.line2[0],card.line3[0],card.line4[0]];
      let column1 = [card.line0[1], card.line1[1],card.line2[1],card.line3[1],card.line4[1]];
      let column2 = [card.line0[2], card.line1[2],card.line2[2],card.line3[2],card.line4[2]];
      let column3 = [card.line0[3], card.line1[3],card.line2[3],card.line3[3],card.line4[3]];
      let column4 = [card.line0[4], card.line1[4],card.line2[4],card.line3[4],card.line4[4]];

      //column conditions
      let columnCondition0 = column0.every((el) => el.includes('X'));
      let columnCondition1 = column1.every((el) => el.includes('X'));
      let columnCondition2 = column2.every((el) => el.includes('X'));
      let columnCondition3 = column3.every((el) => el.includes('X'));
      let columnCondition4 = column4.every((el) => el.includes('X'));

      //line conditions
      let lineCondition0 = card.line0.every((el) => el.includes('X'));
      let lineCondition1 = card.line1.every((el) => el.includes('X'));
      let lineCondition2 = card.line2.every((el) => el.includes('X'));
      let lineCondition3 = card.line3.every((el) => el.includes('X'));
      let lineCondition4 = card.line4.every((el) => el.includes('X'));

      if(lineCondition0 || columnCondition0){
        lastNumber = number;
        lineCondition0 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition0 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition0 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition0 ? restLines.push(...card.line4) : restLines.push(...column4);
        winningBoards.push(restLines);
        if(lineCondition0){
          delete card.line0
        }else{
          card.line0.splice(0,1);
          card.line1.splice(0,1);
          card.line2.splice(0,1);
          card.line3.splice(0,1);
          card.line4.splice(0,1);
        }
        restLines =  [];
      }
      else if(lineCondition1 || columnCondition1){
      lastNumber = number;
        lineCondition1 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition1 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition1 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition1 ? restLines.push(...card.line4) : restLines.push(...column4);
        winningBoards.push(restLines);
        if(lineCondition0){
          delete card.line1
        }else{
          card.line0.splice(1,1);
          card.line1.splice(1,1);
          card.line2.splice(1,1);
          card.line3.splice(1,1);
          card.line4.splice(1,1);
        }
        restLines =  [];
      }
      else if(lineCondition2 || columnCondition2){
        lastNumber = number;
        lineCondition2 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition2 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition2 ? restLines.push(...card.line3) : restLines.push(...column3);
        lineCondition2 ? restLines.push(...card.line4) : restLines.push(...column4);
        winningBoards.push(restLines);
        if(lineCondition0){
          delete card.line2
        }else{
          card.line0.splice(2,1);
          card.line1.splice(2,1);
          card.line2.splice(2,1);
          card.line3.splice(2,1);
          card.line4.splice(2,1);
        }
        restLines =  [];
      }
      else if(lineCondition3 || columnCondition3){
        lastNumber = number;
        lineCondition3 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition3 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition3 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition3 ? restLines.push(...card.line4) : restLines.push(...column3);
        winningBoards.push(restLines);
        if(lineCondition0){
          delete card.line3
        }else{
          card.line0.splice(3,1);
          card.line1.splice(3,1);
          card.line2.splice(3,1);
          card.line3.splice(3,1);
          card.line4.splice(3,1);
        }
        restLines =  [];
      }
      else if(lineCondition4 || columnCondition4){
        lastNumber = number;
        lineCondition4 ? restLines.push(...card.line0) : restLines.push(...column0);
        lineCondition4 ? restLines.push(...card.line1) : restLines.push(...column1);
        lineCondition4 ? restLines.push(...card.line2) : restLines.push(...column2);
        lineCondition4 ? restLines.push(...card.line3) : restLines.push(...column3);
        winningBoards.push(restLines);
        if(lineCondition0){
          delete card.line4
        }else{
          card.line0.splice(4,1);
          card.line1.splice(4,1);
          card.line2.splice(4,1);
          card.line3.splice(4,1);
          card.line4.splice(4,1);
        }
        restLines =  [];
      }
      // console.log('lastNumber :', lastNumber);
    });
  });
  
  // console.log('winningBoards :', winningBoards);

  // Remove X from numbers
restLines = restLines.filter(val => {return !val.includes('X')});

// Count of all non marked numbers
let sumOfAllUnmarked = restLines.reduce((prev, curr) => {return Number(prev) + Number(curr)}, 0);

const result = Number(sumOfAllUnmarked * lastNumber);

return result;

};

module.exports = { part1, part2 };