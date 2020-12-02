var _ = require('underscore');
var fs = require('fs');
// var read = fs.readFileSync("input_day3_2019.txt", 'utf8');
var read = fs.readFileSync("input_test_day3_2019.txt", 'utf8');
console.log('read :', read);
// var read = fs.readFileSync("small_input_day3_test.txt", 'utf8');
var data = read.toString().split(",");
const [c1, c2] = read.split('\n').slice(0);

var test1 = c1.slice(0).trim();
// console.log('test1 :', test1);

var test2 = c2.slice(0).trim();

// var input = 'R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83\nR98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51,U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';



var newPoints = function(input) {
    const allPoints = [];
    let position = {x: 0, y:0};
    input.split(',').map((directions) =>{
      const array = [...directions];
      const letter = array.shift();
      const distance = parseInt(array.join(''));
      const nextPosition = {x: position.x, y: position.y};
      switch (letter) {
          case 'U':
            nextPosition.y += distance;
            break;
          case 'D':
            nextPosition.y -= distance;
              break;
          case 'R':
            nextPosition.x += distance;
              break;
          case 'L':
            nextPosition.x -= distance;
              break;
      }
      allPoints.push({
          point1: {
            x: position.x,
            y: position.y
          },
          point2:{
            x: nextPosition.x,
            y: nextPosition.y
          }
      });
      position = nextPosition;
    }
    )
    return allPoints;
  }
  
var line1 = newPoints(test1)
// console.log('line1 :', line1);
var line2 = newPoints(test2)
// console.log('line2 :', line2[2].point1.x);

  

const solve = function (input) { //wire
    const wires = input.split('\n').map(wire =>newPoints(wire));
    const intersection = [];
    wires[0].map((w1) => {
    wires[1].map((w2) => {
    
    if((w1.point1.x == w1.point2.x) ^ (w2.point1.x == w2.point2.x)){
      const vertical = w1.point1.x == w1.point2.x ? w1 : w2;
      const horizontal = w1.point1.x == w1.point2.x ? w2 : w1; 
  
      const minX = Math.min(horizontal.point1.x, horizontal.point2.x);
      const maxX = Math.max(horizontal.point1.x, horizontal.point2.x);
  
      const minY = Math.min(vertical.point1.y, vertical.point2.y);
      const maxY = Math.max(vertical.point1.y, vertical.point2.y);
  
      if(vertical.point1.x >= minX && vertical.point1.x <= maxX && horizontal.point1.y >= minY && horizontal.point1.y <= maxY){
           intersection.push({
               x: vertical.point1.x, 
               y: horizontal.point1.y});
    }
  
       };
    });
  });
  
  console.log(intersection);
  
  const distance = intersection.filter(p => p.x != 0 || p.y !=0)
              .map(p => Math.abs(p.x) + Math.abs(p.y));
  
  return Math.min(...distance);
  };

  var result = solve(read);
  console.log('result :', result);
