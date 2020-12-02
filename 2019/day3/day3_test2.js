var _ = require('underscore');
var fs = require('fs');
var read = fs.readFileSync("input_day3_2019.txt", 'utf8');
// var read = fs.readFileSync("input_test_day3_2019.txt", 'utf8');
// var read = fs.readFileSync("small_input_day3_test.txt", 'utf8');
var data = read.toString().split(",");
const [c1, c2] = read.split('\n').slice(0);

var test1 = c1.slice(0).trim();
// console.log('test1 :', test1);
// console.log('cable1: ', cable1_coordenates);

test1 = test1.split(',');

var test2 = c2.slice(0).trim();
test2 = test2.split(',');


class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
};

class Line{
  constructor(p1,p2){
    this.point1 = p1; //x,y
    this.point2 = p2;
  }
};

//Tutorial from internet

 // Build points
function point_constructor(array) {
  var coordenates = [];
  var starting_point = new Point(0,0);
  coordenates.push(starting_point);
  var current_point = new Point(0,0);

for(let i = 0; i < array.length; i++){
var ltr = array[i].charAt(0);
var number = parseInt(array[i].slice(1));
let x = current_point.x;
let y = current_point.y;
var distance = parseInt(array[i].substring(1, array[i].length)); //will be needed for part2?
// console.log('distance :', distance);

if(ltr == "R"){
  x += number;
  current_point.x = x;
  coordenates.push(new Point(x,y));

}else if(ltr == "L"){
  x-= number;
  current_point.x = x;
  coordenates.push(new Point(x,y));

}else if(ltr == "U"){
  y+= number;
  current_point.y = y;
  coordenates.push(new Point(x,y));

}else if(ltr == "D"){
  y-= number;
  current_point.y = y;
  coordenates.push(new Point(x,y));

}
}
return coordenates;
}



var points1 = point_constructor(test1);
// console.log('points1 :', points1);
var points2= point_constructor(test2);
// console.log('points2 :', points2.length);



function line_constructor(arr1) {
  var line = [];
  for(var i = 0; i< arr1.length - 1; i++){
    var semiline = new Line(arr1[i], arr1[i+1]);
    line.push(semiline);
  }
  return line;
}

var wire1 = line_constructor(points1);
// console.log('wire1 :', wire1);
var wire2 = line_constructor(points2);
// console.log('wire2 :', wire2);



const solve = function (wire1, wire2) { //wire
  //const wires = input.split'\n'.map(wire =>parse(wire));
  const intersection = [];
  wire1.map((w1) => {
  wire2.map((w2) => {
  
  if((w1.point1.x == w1.point2.x) ^ (w2.point1.x == w2.point2.x)){
    const vertical = w1.point1.x == w1.point2.x ? w1 : w2;
    const horizontal = w1.point1.x == w1.point2.x ? w2 : w1; 

    const minX = Math.min(horizontal.point1.x, horizontal.point2.x);
    const maxX = Math.max(horizontal.point1.x, horizontal.point2.x);

    const minY = Math.min(vertical.point1.y, vertical.point2.y);
    const maxY = Math.max(vertical.point1.y, vertical.point2.y);

    if(vertical.point1.x >= minX && vertical.point1.x <= maxX && horizontal.point1.y >= minY && horizontal.point1.y <= maxY){
         intersection.push(new Point(vertical.point1.x, horizontal.point1.y));
  }

     };
  });
});


const distance = intersection.filter(p => p.x != 0 || p.y !=0)
            .map(p => Math.abs(p.x) + Math.abs(p.y));

return Math.min(...distance);
};


console.log('Solve: ', solve(wire1, wire2));


