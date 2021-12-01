const fs = require('fs');
const assert = require('assert').strict;


//* 1st puzzle

const inputs = fs.readFileSync('./2021/day1/input.txt', 'utf-8')
  .split('\n')
  .map(Number);

let amountOfIncreases = 0;
let prevMeasurement = inputs[0];
const measurements = inputs.slice(1);
measurements.forEach((m) => {  
  if(prevMeasurement < m) {
    amountOfIncreases++;
  }
  prevMeasurement = m;
});
console.log({ amountOfIncreases });