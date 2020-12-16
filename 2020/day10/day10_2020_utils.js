const day10 = (data) => {
  data = data.sort((a, b) => { return a - b });
  var lastValue = data[data.length - 1];
  var fullInput = [0, ...data, lastValue + 3];
  var oneJolt = [];
  var twoJolt = [];
  var threeJolt = [];
  for (var i = 0; i < fullInput.length; i++) {
    (fullInput[i + 1] - fullInput[i] == 1) ? (oneJolt.push(fullInput[i])) : null;
    (fullInput[i + 1] - fullInput[i] == 2) ? (twoJolt.push(fullInput[i])) : null;
    (fullInput[i + 1] - fullInput[i] == 3) ? (threeJolt.push(fullInput[i])) : null;

  }
  // console.log('oneJolt :', oneJolt.length);
  // console.log('twoJolt :', twoJolt.length);
  // console.log('threeJolt :', threeJolt.length);
  return oneJolt.length * threeJolt.length

};

//1890 -> Correct

const day10_part2 = (data) => {
  console.log(new Date());
  data = data.sort((a, b) => { return a - b });
  // var lastValue = data[data.length - 1];
  // var fullInput = [0, ...data, lastValue + 3];
  // let dataTest = [...new Set(data.slice(0, 6))];
  data.push(data[data.length - 1] + 3)
  // console.log('dataTest :', dataTest);
  let countBranches = new Set();
  const branches = (data, i = 0, cache = {}) => {
    var count = 0;

    if(i in cache){
      return cache[i];
    }
    
    if (i === (data.length - 1)) {
      return 1;
    }
    if ((data[i + 1] - data[i]) <= 3) {
      count += branches(data, i + 1, cache)
    }

    if ((data[i + 2] - data[i]) <= 3) {
      count +=branches(data, i + 2, cache)
    }
    if ((data[i + 3] - data[i]) <= 3) {
      count += branches(data, i + 3, cache)
    }
    cache[i] = count;
    return count;
  }
//28346956187648 -> too low

  console.log('branches :', branches(data));
  // console.log('countBranches :', countBranches.size);
};


module.exports = {
  day10,
  day10_part2,
};
