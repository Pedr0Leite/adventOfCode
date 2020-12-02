let validPW_pt1 = 0;
let validPW_pt2 = 0;

const part1 = (data) =>{
    data.forEach(x=>{
    let n1 = +x[0].split("-")[0];
    let n2 = +x[0].split("-")[1];
    let letter = x[1];
    let arr = [...x[2]];
    var numberOfOcurr = arr.reduce((curr,acc)=>(acc === letter ? curr + 1 : curr), 0);
    (n1 <= numberOfOcurr && numberOfOcurr <= n2) ? validPW_pt1++ : null;
});
return validPW_pt1;
};


const part2 = (data) =>{
    data.forEach(x=>{
        let n1 = +x[0].split("-")[0];
        let n2 = +x[0].split("-")[1];
        let letter = x[1];
        let arr = [...x[2]];
        ((arr[n1-1] === letter  || arr[n2-1] === letter) && !(arr[n1-1] === letter  && arr[n2-1] === letter)) ? validPW_pt2++ : null;
    });
    return validPW_pt2;
};

module.exports = {
    part1,
    part2,
  };
  