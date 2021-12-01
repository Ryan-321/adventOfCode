const fs = require('fs');
const assert = require('assert').strict;


//* 1st puzzle

const inputs = fs.readFileSync('./2021/day1/input.txt', 'utf-8')
  .split('\n')
  .map(Number);

function findIncreases(nums) {
  let amountOfIncreases = 0;
  let prevMeasurement = nums[0];
  const measurements = nums.slice(1);

  measurements.forEach((m) => {  
    if(prevMeasurement < m) {
      amountOfIncreases++;
    }
    prevMeasurement = m;
  });
  return amountOfIncreases;
}
// console.log('puzzle one', { amountOfIncreases: findIncreases(inputs) });

// * 2nd puzzle
const measurements2 = inputs.map((num, idx) => {
  const idxPlus1 = inputs[idx + 1] || 0;
  const idxPlus2 = inputs[idx + 2] || 0;
  const sum = num + idxPlus1 + idxPlus2;

  console.log({ sum });
  return sum;
});

console.log({ measurements2 });
console.log('puzzle 2', { amountOfIncreases: findIncreases(measurements2)});