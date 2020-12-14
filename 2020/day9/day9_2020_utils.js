const day9 = (data) => {
  let preamble = 25;

  var allCombinations = (data) =>
    data.reduce(
      (acc, curr, index) =>
        acc.concat(
          data
            .slice(index + 1)
            .map((element) => (curr != element ? curr + element : null))
        ),
      []
    );

  var result_part1;
  for (var i = 0; i < data.length; i++) {
    let slicedArr = data.slice(i, preamble);
    let number = data[preamble];
    var comb = allCombinations(slicedArr);
    let setArr = new Set(comb);
    //PART 1
    if (setArr.has(number) == false) {
      result_part1 = number;
      break;
    }
    preamble++;
  }
  return result_part1;
};

const day9_part2 = (data) => {
  let sum = 0;
  let tempArr = [];
  let finalValue = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
    tempArr.push(data[i]);
    // if(sum > 127){
    if (sum > 105950735) {
      sum = 0;
      i = 0;
      tempArr = [];
      data.shift();
      // }else if(sum == 127){
    } else if (sum == 105950735) {
      let min = Math.min(...tempArr);
      let max = Math.max(...tempArr);
      finalValue = max + min;
      break;
    }
  }
  return finalValue;
};


module.exports = {
  day9,
  day9_part2,
};
