const day12 = (data) => {
  var regex = /(^\w)(.*)/;
  var objXY = { x: 0, y: 0 };
  let windOri = ["N", "E", "S", "W"];
  var currentOrientation = "E";
  console.log(new Date());
  data.forEach((coord, i) => {
    var splitInfo = regex.exec(coord);
    var letter = splitInfo[1];
    var number = +splitInfo[2];

    if (letter == "F") {
      if (currentOrientation == "N") {
        objXY.y += number;
      } else if (currentOrientation == "W") {
        objXY.x -= number;
      } else if (currentOrientation == "S") {
        objXY.y -= number;
      } else if (currentOrientation == "E") {
        objXY.x += number;
      }
    } else if (letter == "N") {
      objXY.y += number;
    } else if (letter == "S") {
      objXY.y -= number;
    } else if (letter == "E") {
      objXY.x += number;
    } else if (letter == "W") {
      objXY.x -= number;
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

  });
  // return Object.values(objXY).reduce((x, y) => Math.abs(x) + Math.abs(y), 0);
  return Math.abs(objXY.x) + Math.abs(objXY.y);
};

module.exports = {
  day12,
};
