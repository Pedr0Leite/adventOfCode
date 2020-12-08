
const part1 = (dataset) => {
    var rowRange = [...Array(128).keys()];
    var columnRange = [...Array(8).keys()];
    let allIDs = [];
    console.log('Starting to run the code at: ' + Date());
    dataset.forEach(string=>{
        let row, column;
        let firstSeven = [...string.substring(0,7)];
        let lastThree = [...string.substring(7,10)];
        var allRows = [...rowRange];
        let tempRowArr = [];
        firstSeven.forEach(letter=>{
            if(tempRowArr.length == 1 || tempRowArr.length == 2){
                row = tempRowArr[0];
                return;
            }else{
            if(letter == "F"){
                (tempRowArr == "" || tempRowArr == []) ? (tempRowArr = allRows.slice(0, (allRows.length / 2))) : (tempRowArr = tempRowArr.slice(0, (tempRowArr.length / 2)))
            }else if(letter == "B"){
                (tempRowArr == "" || tempRowArr == []) ? (tempRowArr = allRows.slice(allRows.length / 2, allRows[allRows.length])) : (tempRowArr = tempRowArr.slice(tempRowArr.length / 2,tempRowArr[tempRowArr.length]))
            }
            }
        })

        var allColumns = [...columnRange];
        let tempColumnArr = [];
        lastThree.forEach(letter=>{
                if(letter == "L"){
                    (tempColumnArr == "" || tempColumnArr == []) ? (tempColumnArr = allColumns.slice(0, (allColumns.length / 2))) : (tempColumnArr = tempColumnArr.slice(0, (tempColumnArr.length / 2)))
                }else if(letter == "R"){
                    (tempColumnArr == "" || tempColumnArr == []) ? (tempColumnArr = allColumns.slice((allColumns.length / 2), allColumns[allColumns.length])) : (tempColumnArr = tempColumnArr.slice(tempColumnArr.length / 2,tempColumnArr[tempColumnArr.length]))
                }
                column = tempColumnArr[0];
        })
        let id  = (row * 8 + column)
        allIDs.push(id);
    });

   
    return allIDs.reduce(function(a, b) {return Math.max(a, b);});
};

const part2 = (dataset) =>{
    console.log('Starting to run the code at: ' + Date());

    function stringToNumb(string){
        return parseInt([...string].map(letter => letter === "B" || letter === "R" ? 1 : 0).join(''),2); //the number two convertes binary into number
    }

let allIDS = [];
class Seat{
    constructor(string){
        this.row = stringToNumb(string.substring(0,7));
        this.column = stringToNumb(string.substring(7, 10));
        this.id = (this.row * 8 + this.column);
    }
}

dataset.forEach(string=>{
    var seat = new Seat(string);
    allIDS.push(seat.id);
})

let orderedIDS = allIDS.sort((a,b)=> a-b);
let result;
for(var i = 0; i < orderedIDS.length; i++){
    if(orderedIDS[i + 1] - orderedIDS[i] > 1){
        result = orderedIDS[i] + 1;
        break;
    }
}

return result;
}


module.exports = {
    part1,
    part2
  };
  