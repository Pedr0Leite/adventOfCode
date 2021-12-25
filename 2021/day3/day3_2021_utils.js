const part1 = (data) => {
  //most common number
  const gamaRate = {};
  //lest common number
  const epsilonRate = {};

  const numberOfelements = data[0].length;
  let counter = 0;

  while (counter < numberOfelements) {
    let tempCount = { zero: 0, one: 0 };
    let tempData = data.map((x) => x.slice(counter, counter + 1));

    tempData.forEach((value) => {
      value == "1" ? tempCount.one++ : tempCount.zero++;
    });

    if (tempCount.one > tempCount.zero) {
      gamaRate[counter] = 1;
      epsilonRate[counter] = 0;
    } else {
      gamaRate[counter] = 0;
      epsilonRate[counter] = 1;
    }
    counter++;
  }

  //Convert Binary to Numeric
  const gamaNumber = parseInt(Object.values(gamaRate).join(""), 2);
  const epsilonRateNumber = parseInt(Object.values(epsilonRate).join(""), 2);

  const finalValue = gamaNumber * epsilonRateNumber;

  return finalValue;
};

const part2 = (data) => {
  let counter = 0;
  let lengthOfValue = data[0].length;
  
  var oxygenArr = [...data];
  var CO2Arr = [...data];
  
  while (counter < lengthOfValue) {
      let tempCount_O2 = { zero: 0, one: 0 };
      let tempCount_CO2 = { zero: 0, one: 0 };
      let oxygenValueToKeep = '';
      let CO2ValueToKeep = '';
      let o2_count = 0;
      let co2_count = 0;
      
      //O2
      oxygenArr.forEach((x) => {
          x[counter] == "1" ? tempCount_O2.one++ : tempCount_O2.zero++;
        });

    if(tempCount_O2.one > tempCount_O2.zero){
        oxygenValueToKeep = 1;
        o2_count = tempCount_O2.one;
    }else if(tempCount_O2.one < tempCount_O2.zero){
        oxygenValueToKeep = 0;
        o2_count = tempCount_O2.zero;
    }else if(tempCount_O2.one == tempCount_O2.zero){
        oxygenValueToKeep = 1;
        o2_count = tempCount_O2.one;
    }
    //Filter only the numbers from the bit criteria
    if(oxygenArr.length > 1){
    oxygenArr = oxygenArr.map(x =>{
        if(x[counter] == oxygenValueToKeep) return x
    }).filter(y => y != undefined)
}
    
    //CO2
    CO2Arr.forEach((x) => {
        x[counter] == "1" ? tempCount_CO2.one++ : tempCount_CO2.zero++;
    });
    
    if(tempCount_CO2.one > tempCount_CO2.zero){
        CO2ValueToKeep = 0;
        co2_count = tempCount_CO2.zero;
    }else if(tempCount_CO2.one < tempCount_CO2.zero){
        CO2ValueToKeep = 1;
        co2_count = tempCount_CO2.one;
    }else if(tempCount_CO2.one == tempCount_CO2.zero){
        CO2ValueToKeep = 0;
        co2_count = tempCount_CO2.zero;
    }

    //Filter only the numbers from the bit criteria
    if(CO2Arr.length > 1){
    CO2Arr = CO2Arr.map(x =>{
        if(x[counter] == CO2ValueToKeep) return x
    }).filter(y => y != undefined)
    }
   
    counter++
}

return parseInt(Number(oxygenArr[0]),2) * parseInt(Number(CO2Arr[0]),2)

};

module.exports = { part1, part2 };