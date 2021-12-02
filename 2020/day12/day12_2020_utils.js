const day12 = (data) => {
  var regex = /(^\w)(.*)/;
  var objXY = { x: 0, y: 0 };
  // var objXY_part2 = { x: 10, y: 1 };
  let windOri = ["N", "E", "S", "W"];
  var currentOrientation = "E";
  console.log(new Date());
  data.forEach((coord, i) => {
    var splitInfo = regex.exec(coord);
    var letter = splitInfo[1];
    // var number = +splitInfo[2];
    // console.log('letter: ' + letter);
    // console.log('number: ' + number);
    // console.log('currentOrientation :', currentOrientation);
    // console.table(objXY_part2)
    if (letter == "F") {
      if (currentOrientation == "N") {
        objXY.y += number;
        //part2
        // objXY_part2.y =  objXY.y + (number * objXY_part2.y);
        // objXY_part2.x =  objXY.x + (number * objXY_part2.x);
      } else if (currentOrientation == "W") {
        objXY.x -= number;
        //part2
        // objXY_part2.x = objXY.y - (number * objXY_part2.x);
        // objXY_part2.y = objXY.x - (number * objXY_part2.y);
      } else if (currentOrientation == "S") {
        objXY.y -= number;
        //part2
        // objXY_part2.y = objXY.y - (number * objXY_part2.y);
        // objXY_part2.x = objXY.x - (number * objXY_part2.x);
      } else if (currentOrientation == "E") {
        objXY.x += number;
        //part2
        // objXY_part2.x = objXY.y + (number * objXY_part2.x);
        // objXY_part2.y = objXY.x + (number * objXY_part2.y);
      }
    } else if (letter == "N") {
      objXY.y += number;
       //part2
      //  objXY_part2.y += number;
    } else if (letter == "S") {
      objXY.y -= number;
       //part2
      //  objXY_part2.y -= number;
    } else if (letter == "E") {
      objXY.x += number;
       //part2
      //  objXY_part2.x += number;
    } else if (letter == "W") {
      objXY.x -= number;
       //part2
      //  objXY_part2.x -= number;
    } else if (letter == "L") {
      let currentIndex = windOri.indexOf(currentOrientation);
      if (number == 90) {
        windOri[currentIndex - 1] != undefined ? (currentOrientation = windOri[currentIndex - 1]) : (currentOrientation = windOri[currentIndex + 3]);
      } else if (number == 180) {
        windOri[currentIndex - 2] != undefined ? (currentOrientation = windOri[currentIndex - 2]) : (currentOrientation = windOri[currentIndex + 2]);
      } else if (number == 270) {
        windOri[currentIndex + 1] != undefined ? (currentOrientation = windOri[currentIndex + 1]) : (currentOrientation = windOri[currentIndex - 3]);
      }
    } else if (letter == "R") {
      let currentIndex = windOri.indexOf(currentOrientation);
      if (number == 90) {
        windOri[currentIndex + 1] != undefined ? (currentOrientation = windOri[currentIndex + 1]) : (currentOrientation = windOri[currentIndex - 3]);
      } else if (number == 180) {
        windOri[currentIndex + 2] != undefined ? (currentOrientation = windOri[currentIndex + 2]) : (currentOrientation = windOri[currentIndex - 2]);
      } else if (number == 270) {
        windOri[currentIndex - 1] != undefined ? (currentOrientation = windOri[currentIndex - 1]) : (currentOrientation = windOri[currentIndex + 3]);
      }
    }

    console.log('----------------------------')

  });

  // return Object.values(objXY).reduce((x, y) => Math.abs(x) + Math.abs(y), 0);
  // console.log('PART 2: ' + (Math.abs(objXY_part2.x) + Math.abs(objXY_part2.y)))
  return Math.abs(objXY.x) + Math.abs(objXY.y);
};

module.exports = {
  day12,
};
