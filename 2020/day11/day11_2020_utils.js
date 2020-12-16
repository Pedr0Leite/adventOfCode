const day11 = (data) => {
  let countSeats = 0;
  let seatArr = [];
  let numberOfOccupiedSeats = 0;
  data.forEach((line)=>{
    let tempLine = [];
    let lineSplit = [...line];
    lineSplit.forEach((seat,i)=>{
      let restOfLine = lineSplit.slice(i + 1, lineSplit.length - 1);
      let occupiedSeats = restOfLine.filter(x=> x == "#").length;
      if(seat == "."){
        tempLine.push('.')
      }else if(seat == "L" && lineSplit[i - 1] != "#" && lineSplit[i + 1] != "#"){
        tempLine.push('#')
      }else if  (seat == "#" && occupiedSeats < 4){
        tempLine.push('L')
      }
      // (seat == ".") ? tempLine.push('.') : null;
      // (seat == "L" && lineSplit[i - 1] != "#" && lineSplit[i + 1] != "#") ? tempLine.push('#') : null;
      // (seat == "#" && occupiedSeats < 4) ?  tempLine.push('L') : null;
    })
    let occupiedSeatsPerLine = tempLine.reduce((curr, acc) => (acc === "#" ? curr + 1 : curr), 0);
    tempLine = tempLine.join('');
    seatArr.push(tempLine);
    numberOfOccupiedSeats += occupiedSeatsPerLine;
  })
  
  console.log('numberOfOccupiedSeats :', numberOfOccupiedSeats);
  console.table(seatArr);
};



module.exports = {
day11
};
