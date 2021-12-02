const part1 = (x) => {
  let index = 0;
  let lineNumber = 0;
  let values = [];
  let valuesObj = {};
  x.forEach((line) => {
    // console.log('LINE ' + lineNumber + ': ' + line);
    // console.log('index :', index);
    // console.log('line[index] :', line[index]);
    // console.log("----------------------------");
    values.push(line[index]);
    valuesObj[lineNumber] = line[index];
    if (line[index + 1] === undefined) {
      index = 2;
    } else if (line[index + 2] === undefined) {
      index = 1;
    } else if (line[index + 3] === undefined) {
      index = 0;
    } else {
      index += 3;
    }
    lineNumber += 1;
    // console.log('index :', index);
  });
  // console.log('valuesObj :', valuesObj);
  // console.log('values :', values);
  return values.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);
};
//-------------------------------- PART 2 ----------------------------
const day3 = (x) => {
  //slop1 - 1|1---------------------
  let indexA = 0;
  let lineNumberA = 0;
  let valuesA = [];
  x.forEach((lineA) => {
    valuesA.push(lineA[indexA]);
    // console.log('LINE ' + lineNumberA + ': ' + line);
    if (lineA[indexA + 1] === undefined) {
      indexA = 0;
    } else {
      indexA += 1;
    }
    lineNumberA += 1;
  });
  var slop1 = valuesA.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);

  //slop2 - 3|1---------------------
  let indexB = 0;
  let lineNumberB = 0;
  let valuesB = [];
  x.forEach((lineB) => {
    valuesB.push(lineB[indexB]);
    if (lineB[indexB + 1] === undefined) {
      indexB = 2;
    } else if (lineB[indexB + 2] === undefined) {
      indexB = 1;
    } else if (lineB[indexB + 3] === undefined) {
      indexB = 0;
    } else {
      indexB += 3;
    }
    lineNumberB += 1;
  });
  var slop2 = valuesB.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);

  //slop3 - 5|1---------------------
  let indexC = 0;
  let lineNumberC = 0;
  let valuesC = [];
  x.forEach((lineC) => {
    valuesC.push(lineC[indexC]);
    if (lineC[indexC + 1] === undefined) {
      indexC = 4;
    } else if (lineC[indexC + 2] === undefined) {
      indexC = 3;
    } else if (lineC[indexC + 3] === undefined) {
      indexC = 2;
    } else if (lineC[indexC + 4] === undefined) {
      indexC = 1;
    } else if (lineC[indexC + 5] === undefined) {
      indexC = 0;
    } else {
      indexC += 5;
    }
    lineNumberC += 1;
  });
  var slop3 = valuesC.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);

  //slop4 - 7|1---------------------
  let indexD = 0;
  let lineNumberD = 0;
  let valuesD = [];
  x.forEach((lineD) => {
    valuesD.push(lineD[indexD]);
    if (lineD[indexD + 1] === undefined) {
      indexD = 6;
    } else if (lineD[indexD + 2] === undefined) {
      indexD = 5;
    } else if (lineD[indexD + 3] === undefined) {
      indexD = 4;
    } else if (lineD[indexD + 4] === undefined) {
      indexD = 3;
    } else if (lineD[indexD + 5] === undefined) {
      indexD = 2;
    } else if (lineD[indexD + 6] === undefined) {
      indexD = 1;
    } else if (lineD[indexD + 7] === undefined) {
      indexD = 0;
    } else {
      indexD += 7;
    }
    lineNumberD += 1;
  });
  var slop4 = valuesD.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);

  //slop5 - 1|2---------------------
  let indexE = 0;
  let lineNumberE = 0;
  let valuesE = [];
  x.forEach((lineE) => {
    if (lineNumberE == 0 || lineNumberE % 2 == 0) {
      valuesE.push(lineE[indexE]);
      // console.log('LINE ' + lineNumberE + ': ' + lineE);
      if (lineE[indexE + 1] === undefined) {
        indexE = 0;
      } else {
        indexE += 1;
      }
    }
    lineNumberE += 1;
  });

  var slop5 = valuesE.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);
  // console.log('valuesA :', valuesA.length);
  // console.log('valuesB :', valuesB.length);
  // console.log('valuesC :', valuesC.length);
  // console.log('valuesD :', valuesD.length);
  // console.log('valuesE :', valuesE.length);

  // console.log(
  //   "1: " +
  //     slop1 +
  //     "\n" +
  //     "2: " +
  //     slop2 +
  //     "\n" +
  //     "3: " +
  //     slop3 +
  //     "\n" +
  //     "4: " +
  //     slop4 +
  //     "\n" +
  //     "5: " +
  //     slop5
  // );
  return slop1 * slop2 * slop3 * slop4 * slop5;
};

//another way of doing Part 1 and 2
const day3_II = (dataset) => {
  var slops = [[1], [3], [5], [7], [1, 2]];
  const trees = ([x, slop = 1]) => 
    dataset.filter((line, index) =>
        (dataset[index * slop] || "")[(index * x) % line.length] === "#"
    ).length;

    var one = trees(slops[0]);
    var two = trees(slops[1]);
    var three = trees(slops[2]);
    var four = trees(slops[3]);
    var five = trees(slops[4]);
    // console.log(
    //   "1: " +
    //   one +
    //     "\n" +
    //     "2: " +
    //     two +
    //     "\n" +
    //     "3: " +
    //     three +
    //     "\n" +
    //     "4: " +
    //     four +
    //     "\n" +
    //     "5: " +
    //     five
    // );
    return one * two * three * four * five;
};


module.exports = {
  part1,
  day3,
  day3_II,
};
