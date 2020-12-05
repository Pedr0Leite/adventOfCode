const part1_part2 = (dataset) => {
    //part1
    let numb = 0;
    let tempString = "";
    let tempArr = [];
    let countValid_part1 = 0;
    var transformIntoObj = {};
    const regexTransfObj = /(.+?):(.+?)(?: |$)/;
    
    //part2
    let countValid_part2 = 0;
    const regexCheck_cm_in = /\dcm|\din/;
    const regexSplit_cm_in = /(\d+)(\w+)/;
    const regexECL = /amb|blu|brn|gry|grn|hzl|oth/;
    const regexHCL = /#[0-9a-f]{6}/;

    dataset.forEach(line=>{
        if(line != ""){
            (tempString == "") ? (tempString = tempString + line) : ( tempString = tempString +  " " + line);
        }else{
            tempArr.push(tempString)
            tempString = "";
        }
        numb += 1;
    })
    
    tempArr.forEach(line =>{
    let input = line.split(" ");
    transformIntoObj = input.reduce((acc,i)=>{
    const parsedData = regexTransfObj.exec(i);
    acc[parsedData[1]] = parsedData[2];
    return acc;
},{});

//Part1
let keys = Object.keys(transformIntoObj);
if(keys.length == 8){
    countValid_part1++
}else if(keys.length == 7){
if(keys.indexOf('cid') == -1){
    countValid_part1++
}
}

//Part2
let allCombCorrect = 0;
if(keys.length >= 7){
if(transformIntoObj['byr'] != undefined && transformIntoObj['byr'].length == 4 && +transformIntoObj['byr'] >= 1920 && +transformIntoObj['byr'] <= 2002){allCombCorrect++}
if(transformIntoObj['iyr'] != undefined && transformIntoObj['iyr'].length == 4 && +transformIntoObj['iyr'] >= 2010 && +transformIntoObj['iyr'] <= 2020){allCombCorrect++}
if(transformIntoObj['eyr'] != undefined && transformIntoObj['eyr'].length == 4 && +transformIntoObj['eyr'] >= 2020 && +transformIntoObj['eyr'] <= 2030){allCombCorrect++}
if(transformIntoObj['pid'] != undefined && transformIntoObj['pid'].length == 9){allCombCorrect++}
if(regexCheck_cm_in.test(transformIntoObj['hgt']) == true){
    let split_cm_in = regexSplit_cm_in.exec(transformIntoObj['hgt']);
    let number = split_cm_in[1];
    let unit = split_cm_in[2];
    if(unit == "in"){
        (number >= 59 && number <= 76) ? allCombCorrect++ : null;
    }else{
        (number >= 150 && number <= 193) ? allCombCorrect++ : null;}
}
if(regexECL.test(transformIntoObj['ecl']) == true){allCombCorrect++}
if(regexHCL.test(transformIntoObj['hcl']) == true){allCombCorrect++}
(allCombCorrect >= 7) ? countValid_part2++ : null;
}

})

return [countValid_part1, countValid_part2];

};

module.exports = {
    part1_part2
  };
  