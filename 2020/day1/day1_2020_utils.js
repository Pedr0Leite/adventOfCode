//--------part 1------------
let part1Value = 0;
const part1 = (data) => {
  data.forEach((x) => {
    data.forEach((y) => {
      if (+x + +y == 2020) {
        part1Value = +x * +y;
        return;
      }
    });
  });
  console.log("part1 value: " + part1Value);
};

//--------part 2------------
let part2Value = 0;
const part2 = (data) => {
  data.forEach((x) => {
    data.forEach((y) => {
      data.forEach((z) => {
        if (+x + +y + +z == 2020) {
          part2Value = +x * +y * +z;
          return;
        }
      });
    });
  });
  console.log("part2 value: " + part2Value);
};

module.exports = {
  part1,
  part2,
};
