// const part1 = (dataset) => {
//   let objOfBags = {};
//   console.log(new Date());
//   dataset.map((x) => {
//     const regexWithNumbers = /(.*) bags contain (\d?) (.*) (?:bag|bags), (\d) (.*) (?:bag|bags)./gi;
//     const regexCheckNumbers = /\d+/g;
//     const regexNoNumbers_II = /(.*) (?:bag|bags) contain (\d) (.*) bag./gi;
//     const regexNoNumbers_III = /(.*) bags contain (\d) (.+)[bag|bags], (\d) (.+ ):?bags, (\d) (.+)bag/gi;
//     const regexNoContain = /(.*) bags contain no other bags/g;
//     var obj = {};
//     if (regexCheckNumbers.test(x)) {
//     //   console.log("x: " + x);
//       var tempObj = {};
//       var numbers = x.match(regexCheckNumbers).map(Number);
//       if (numbers.length == 1) {
//         const parsedDataI = regexNoNumbers_II.exec(x);
//         tempObj[parsedDataI[3]] = +parsedDataI[2];
//         objOfBags[parsedDataI[1]] = tempObj;
//         // console.log("-------1-------");
//       } else if (numbers.length == 2) {
//         const parsedDataII = regexWithNumbers.exec(x);
//         tempObj[parsedDataII[3]] = +parsedDataII[2];
//         tempObj[parsedDataII[5]] = +parsedDataII[4];
//         objOfBags[parsedDataII[1]] = tempObj;
//         // console.log("-------2-------");
//       } else { //ISSUE HERE AND IN THE REGEX
//           console.log('x: ' + x);
//         const parsedDataIII = regexNoNumbers_III.exec(x);
//         console.log('parsedDataIII :', parsedDataIII);
//         tempObj[parsedDataIII[3]] = +parsedDataIII[2];
//         tempObj[parsedDataIII[5]] = +parsedDataIII[4];
//         tempObj[parsedDataIII[7]] = +parsedDataIII[6];
//         objOfBags[parsedDataIII[1]] = tempObj;
//         // console.log("-------3-------");
//       }
//     } else {
//       const parsedDataIV = regexNoContain.exec(x);
//     //   console.log('parsedDataIV :', parsedDataIV[1]);
//     objOfBags[parsedDataIV[1]] = 0;
//       // console.log("-------NO NUMB-------");
//     }
//   });

//   function hasShiny(color){
//     if(color === 'shiny gold') return true;
// }

// console.log('objOfBags :', objOfBags);
// let colorsWithShiny = [];
// // let shinyGoldColors = tempArr.find(x=> Object.keys(x) == 'shiny gold');
// // let shinyGoldColorsValues = Object.keys(Object.values(shinyGoldColors)[0]);
// // shinyGoldColorsValues.forEach(color=> colorsWithShiny.push(color));

// // objOfBags.forEach(x=>{
// //      let color = Object.keys(x)[0];
// //     //  console.log('color :', color);
// //      let colorKey = Object.values(x)[0];
// //     //  console.log('colorKey :', colorKey);
// //      if(colorKey.hasOwnProperty('shiny gold') || colorKey.hasOwnProperty(colorsWithShiny)){
// //         //  console.log('color: ' + color);
// //          colorsWithShiny.push(color)
// //         //  console.log('-------------------');
// //         }
// //     });
// //     // console.log('colorsWithShiny :', colorsWithShiny);
// //     return Object.values(colorsWithShiny).length;
// };

//FOLLOWED A TUTORIAL FOR THIS CODE BELOW
const part1_2 = (dataset) => {
  console.log(new Date());
  const bagGraph = {};
  for (const line of dataset) {
    const [fullMatch, outerBag, innerBagList] = line.match(
      /(.*) bags contain (.*)\./
    );
    const innerBags = {};

    if (innerBagList !== "no other bags") {
      for (const innerBag of innerBagList.split(",")) {
        const [_, numString, innerColor] = innerBag.match(/(\d+) (.+) bag/);
        innerBags[innerColor] = +numString;
      }
    }
    bagGraph[outerBag] = innerBags;
  }

  const onlyInnerBags = {};
  for (const outerBag in bagGraph) {
    const multipleInnerBags = bagGraph[outerBag];

    for (const bag in multipleInnerBags) {
      if (!(bag in onlyInnerBags)) {
        onlyInnerBags[bag] = new Set();
      }
      onlyInnerBags[bag].add(outerBag);
    }
  }

  const findAllColorBags = (bagColorString, visited = new Set()) => {
    visited.add(bagColorString);
    const nextBagsSet = onlyInnerBags[bagColorString] || new Set();

    for (const nextBag of nextBagsSet) {
      if (!visited.has(nextBag)) {
        findAllColorBags(nextBag, visited);
      }
    }

    return visited;
  };

  var allColors = findAllColorBags('shiny gold');

  allColors.forEach((color) => {
    if (color == "shiny gold") {
      allColors.delete(color);
    }
  });
  //part1
  let result_part1 = allColors.size;
  
  //part2
  //start with 1 (the shiny bag)
  //for each innerBag
  //add quatity * countInnerBags(innerBag)
  const countInnerBags = (bag) =>
    Object.entries(bagGraph[bag]).reduce((count, [innerBag, quatity])=>{
    return (count + quatity * countInnerBags(innerBag))
    },1)

  let result_part2 = countInnerBags('shiny gold') - 1;

  return [result_part1, result_part2];
};


module.exports = {
  //   part1,
  part1_2,
};
