const day11 = (data) => {
  const occupiedSeats = (arr) => { return arr.filter(x => x == "#").length };
  
  let seatArr = [];
  let stop = false;
  let numberOfOccupiedSeats = 0;
  let countSeatsChange = 0;
  
  console.log(new Date())

  while (stop == false) {
    let temp = 0;
    data.forEach((line, i) => {
      let tempLine = [];
      let lineAbove = (data[i - 1] != undefined) ? [...data[i - 1]] : [];
      let lineCurrent = [...line];
      let lineBelow = (data[i + 1] != undefined) ? [...data[i + 1]] : [];
      
      lineCurrent.forEach((seat, i) => {
        let seatAbove, seatBelow, seatAfter, seatBefore, countAround;
        if (i == 0) {
          seatAbove = (lineAbove != "") ? lineAbove.slice(0, i + 2) : [];
          seatBelow = (lineBelow != "") ? lineBelow.slice(0, i + 2) : [];
        } else {
          seatAbove = (lineAbove != "") ? lineAbove.slice(i - 1, i + 2) : [];
          seatBelow = (lineBelow != "") ? lineBelow.slice(i - 1, i + 2) : [];
        }

        seatAfter = (lineCurrent[i + 1] == "#") ? 1 : 0;
        seatBefore = (lineCurrent[i - 1] == "#") ? 1 : 0;
        countAround = occupiedSeats(seatAbove) + occupiedSeats(seatBelow) + seatAfter + seatBefore;

        if (seat == ".") {
          tempLine.push('.')
        } else if (seat == "L" && countAround == 0) {
          tempLine.push('#')
          countSeatsChange++
          temp++
        } else if (seat == "#" && countAround >= 4) {
          tempLine.push('L')
          countSeatsChange++
          temp++
        } else {
          tempLine.push(seat);
        }
      });

      let occupiedSeatsPerLine = tempLine.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);
      tempLine = tempLine.join('');
      seatArr.push(tempLine);
      numberOfOccupiedSeats += occupiedSeatsPerLine;

      if (data.length - 1 == i) {
        i = 0;
       if(temp == 0){
         stop = true;
         console.log('STOP HERE')
        }else{
          temp = 0;
          countSeatsChange = 0;
          numberOfOccupiedSeats = 0;
          data = seatArr
          seatArr = [];
        }
      }

    }) //forEach
  } //while

  console.log('numberOfOccupiedSeats :', numberOfOccupiedSeats);
  console.log('countSeatsChange :', countSeatsChange);

  return numberOfOccupiedSeats;
};

module.exports = {
  day11
};
