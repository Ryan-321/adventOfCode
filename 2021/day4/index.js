// Day 4: Giant Squid

const fs = require('fs');

const inputs = fs.readFileSync(__dirname+'/inputs.txt', 'utf-8')
  .split('\n');

const nums = inputs[0];
const boardNums = inputs.slice(2);
const boards = [];

// spots on the board
// r1c1, r1c2, r1c3, r1c4, r1c5, r2c1, r2c2, r2c3, r2c4, r3c5, r3c1, r3c3, r3c3, r3c4, r3c5, r4c5, r4c1, r4c4, r4c4, r4c4, r4c5, r5c1, r5c2, r5c3, r5c4, r5c5
// 11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55
const winningCombos = {};


for(let i = 0; i < boardNums.length; i+=6) {
  const start = i;
  const end = i + 5;
  const board = boardNums.slice(start, end);
  boards.push(board);
}

//! loop over nums
for(let i = 0; i <= nums.length; i++) {
  // todo...
}

//! best way to parse the boards?


console.log({ nums, boards });