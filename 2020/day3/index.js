const fs = require("fs");
const input = fs.readFileSync("./2020/day3/input.txt", "utf-8").split("\n");

function check_1(map) {
  let trees = 0;
  // overall postion in the map
  let pos = 3;

  for (let i = 1; i < map.length; i++) {
    // so if we divide overall position, then that left over value is the current position for the horizontal
    const last_digit = pos % map[i].length;  // map[i].length should always equal 31 

    if (map[i][last_digit] == "#") {
      trees++;
    }

    pos += 3;
  }

  return trees;
}


console.log(check_1(input));

function check_2(map, right, down) {
  let trees = 0;
  let pos = right;

  for (let i = down; i < map.length; i += down) {
    const last_digit = pos % map[i].length;

    if (map[i][last_digit] == "#") {
      trees++;
    }

    pos += right;
  }
  return trees;
}

const positions = [[1,1], [3,1], [5,1], [7,1], [1,2]];

const total_part_2 = positions.reduce((acc, p) => {
  const trees =  check_2(input, p[0], p[1]);
  return acc * trees;
}, 1);

console.log('total_part_2', total_part_2);

console.log("FUNC END");


