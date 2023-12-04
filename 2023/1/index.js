const fs = require('fs');
// const assert = require('assert').strict;

// //* 1st puzzle
// const inputs = fs.readFileSync('./2023/1/input.txt', 'utf-8')
//   .split('\n')
//   .map((row) => row.split('').filter((Number)))
//   .map((row) => Number(`${row[0]}${row[row.length - 1]}`))
//   .reduce((acc, sum) => {
//     acc += sum;
//     return acc;
//   }, 0);

// console.log({ inputs });


const numMap = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};

//* 2nd puzzle
const inputs = fs.readFileSync('./2023/1/input.txt', 'utf-8')
  .split('\n')
  

console.log({ inputs });