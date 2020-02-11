//Part 1 - Import data
var _ = require('underscore');
var fs = require('fs');
// var read = fs.readFileSync("input_day3_2019.txt", 'utf8');
var read = fs.readFileSync("input_test_day3_2019.txt", 'utf8');
var data = read.toString().split(",");
// console.log(data);

var data_v2 = data.slice(0);

const [c1, c2] = read.split('\n').slice(0);

var cable1_coordenates = c1.slice(0).trim();
cable1_coordenates = cable1_coordenates.split(',');
// console.log(cable1_coordenates);

var cable2_coordenates = c2.slice(0).trim();
cable2_coordenates = cable2_coordenates.split(',');
// console.log(cable2_coordenates);

//Sit values for testing
// var fs_test = require('fs');
// var read_test = fs_test.readFileSync("input_test_day3_2019.txt", 'utf8');
const [test_c1, test_c2] = read.split('\n').slice(0);

var test1 = test_c1.slice(0).trim();
test1 = test1.split(',');
// // console.log(test1);

var test2 = test_c2.slice(0).trim();
test2 = test2.split(',');
// // console.log(test2);

class Point{
  constructor(x,y,st){
    this.x = x;
    this.y = y;
    this.step = st;  //This belongs to part2
  }
};

class Line{
  constructor(p1,p2, st){
    this.point1 = p1; //x,y
    this.point2 = p2;
    this.step = st; //This belongs to part2
  }
};

class intersectPoint{ //This belongs to part2
  constructor(x,y, st){
    this.x = x;
    this.y = y;
    this.step = st;
  }
};

// Build points
function point_constructor(array) {
    var coordenates = [];
    var step = 0;
    var starting_point = new Point(0,0,0);
    coordenates.push(starting_point);
    var current_point = new Point(0,0,0);

for(let i = 0; i < array.length; i++){
  var ltr = array[i].charAt(0);
  var number = parseInt(array[i].slice(1));
  let x = current_point.x;
  let y = current_point.y;
  // var distance = parseInt(array[i].substring(1, array[i].length));

  if(ltr == "R"){
    x += number;
    current_point.x = x;
    step += number;
    coordenates.push(new Point(x,y,step));

  }else if(ltr == "L"){
    x-= number;
    current_point.x = x;
    step += number;
    coordenates.push(new Point(x,y,step));

  }else if(ltr == "U"){
    y+= number;
    current_point.y = y;
    step += number;
    coordenates.push(new Point(x,y,step));

  }else if(ltr == "D"){
    y-= number;
    current_point.y = y;
    step += number;
    coordenates.push(new Point(x,y,step));

}
}
return coordenates;
}

//Build Lines
var array_of_points1 = point_constructor(cable1_coordenates);
// console.log(array_of_points1);
var array_of_points2 = point_constructor(cable2_coordenates);
// console.log(array_of_points2.length);
var array_of_points_test1 = point_constructor(test1);
// console.log('array_of_points_test1 :', array_of_points_test1);
var array_of_points_test2 = point_constructor(test2);
// console.log('array_of_points_test2 :', array_of_points_test2);


function line_constructor(arr1) {
  var line = [];
  // var firstStep = 0;
  for(var i = 0; i< arr1.length - 1; i++){
    var semiline = new Line(arr1[i], arr1[i+1]); //third parameters belongs to part2
    line.push(semiline);
    // firstStep += Math.abs(arr1[i].step - arr1[i+1].step);
  }
  return line;
}

var line1 = line_constructor(array_of_points1);
// console.log(line1[0]);
var line2 = line_constructor(array_of_points2);
// console.log(line2);
var line_test1 = line_constructor(array_of_points_test1);
// console.log('line_test1 :', line_test1.length);
var line_test2 = line_constructor(array_of_points_test2);
console.log('line_test2 :', line_test2);


//Intersect points
const solve = function (wire1, wire2) { //steps belong to part2

  const intersect_points = [];

  var steps1 = 0;
  wire1.map((w1, step1) => {
  var steps2 = 0;
  wire2.map((w2, step2) => {
  
  if((w1.point1.x == w1.point2.x) ^ (w2.point1.x == w2.point2.x)){
    const vertical = w1.point1.x == w1.point2.x ? w1 : w2;
    const horizontal = w1.point1.x == w1.point2.x ? w2 : w1; 

    const minX = Math.min(horizontal.point1.x, horizontal.point2.x);
    const maxX = Math.max(horizontal.point1.x, horizontal.point2.x);

    const minY = Math.min(vertical.point1.y, vertical.point2.y);
    const maxY = Math.max(vertical.point1.y, vertical.point2.y);

    if(vertical.point1.x >= minX && vertical.point1.x <= maxX && horizontal.point1.y >= minY && horizontal.point1.y <= maxY){
      var steps = steps1 + steps2;
      var i = new intersectPoint(vertical.point1.x, horizontal.point1.y,steps);
      i.steps += parseInt(horizontal.x, i) + parseInt(vertical.x, i);
      console.log('i.steps :', i.steps);
      intersect_points.push(i);
  }

     };
     steps2 += Math.abs((w2.point1.x - w2.point2.x) + (w2.point1.y - w2.point2.y))
    //  console.log('steps2 :', steps2);
  });
  steps1 += Math.abs((w1.point1.x - w1.point2.x) + (w1.point1.y - w1.point2.y))
  // console.log('steps1 :', steps1);
});

return intersect_points;
// const distance = intersect_points.filter(p => p.x != 0 || p.y !=0).map(p => p.steps);

// return Math.min(...distance);

};

var last = solve(line_test1, line_test2);
console.log('last :', last);


// var Manhattan_distance = function (arr1) {
//   const distance = arr1.filter(p => p.x != 0 || p.y !=0)
//   .map(p => Math.abs(p.x) + Math.abs(p.y));

// return Math.min(...distance);
// }

// var manhDist = Manhattan_distance(last);
// console.log('ManDist :', manhDist);



// var findMindDist = function minDistance(array, value) {
//   var minDist = array.filter(p => p.x !=0 || p.y !=0)
//                      .map(p => (Math.abs(p.x) + Math.abs(p.y)) == value);

//   return minDist.st;
  
// }
// console.log('findMindDist :', findMindDist(last, manhDist));
