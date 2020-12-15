const day10 = (data) => {
  data = data.sort((a,b)=> {return a - b});
  var oneJolt = [];
  var twoJolt = [];
  var threeJolt = [];
  var arrOfarrangements = [];
  data.unshift(0);
  data.push(data[data.length - 1] + 3)
  // console.log('data :', data);
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    (data[i + 1] - data[i] == 1) ? (oneJolt.push(data[i])) : null;
    (data[i + 1] - data[i] == 2) ? (twoJolt.push(data[i])) : null;
    (data[i + 1] - data[i] == 3) ? (threeJolt.push(data[i])) : null;

  }
  console.log('oneJolt :', oneJolt.length);
  console.log('twoJolt :', twoJolt.length);
  console.log('threeJolt :', threeJolt.length);
  return oneJolt.length * threeJolt.length
  
};

//1890 -> Correct

const day10_part2 = (data) => {
  data = data.sort((a,b)=> {return a - b});
  let dataTest = data.slice(0,6);
  console.log('dataTest :', dataTest);
  let tempArr_I = [];
  let tempArr_II = [];
  let tempArr_III = [];
  let tempArr_IV = [];
  let tempArr_V = [];
  for (var i = 0; i < dataTest.length; i++) {
    
  }
  console.log('tempArr_I :', tempArr_I);
  console.log('tempArr_II :', tempArr_II);
  console.log('tempArr_III :', tempArr_III);
  console.log('tempArr_IV :', tempArr_IV);
  console.log('tempArr_V :', tempArr_V);
  
};


module.exports = {
  day10,
  day10_part2,
};
