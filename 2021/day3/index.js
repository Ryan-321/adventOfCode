// Day 3 - Binary Diagnostics
const fs = require('fs');

const inputs = fs.readFileSync(__dirname+'/inputs.txt', 'utf-8')
  .split('\n');

const testInput = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];
  
/**
 * need to check power consumption
 * by finding the gamma and epsilon rate and multiplying together 
*/
function puzzleOne(inputs) {
  const commonBits = {};
  const middle = Math.round(inputs.length / 2);

  // MAIN LOOP - finds most common bits
  inputs.forEach((input) => {
    input.split('').map((num, idx) => {
      const bit = Number(num);

      if(commonBits[idx]) {
        commonBits[idx] += bit;
      } else {
        commonBits[idx] = bit;
      }
    });
  });

  // secondary loop - calcs gamma
    // episoln is just the inverse of gamma
  let gammaBits = [];
  for(let index in commonBits) {
    const mostC = commonBits[index] >  middle ? 1 : 0;
    gammaBits.push(mostC);
  }
  
  const epsilonBits = gammaBits.map((g) => g === 1 ? 0 : 1).join('');
  const gamma = parseInt(gammaBits.join(''), 2);
  const epsilon = parseInt(epsilonBits, 2);

  return gamma * epsilon;
}

// console.log('puzzleOne', puzzleOne(inputs));

/**
 * Need to verify the life support rating
 *   find by calculating the oxygen generator rating by the CO2 scrubber rating
*/
function puzzleTwo(inputs) {

}