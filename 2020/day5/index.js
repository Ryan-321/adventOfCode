const fs = require('fs');
const assert = require('assert').strict;

const boardingPasses = fs
  .readFileSync('./2020/day5/input.txt', 'utf-8')
  .split('\n')
  .map((str) => {
    const row = str.slice(0, 7);
    const column = str.slice(7);
    return [row, column];
  });
// console.log({ boardingPasses });

const dir = {
  F: 'front',
  B: 'back',
  L: 'left',
  R: 'right',
};

// remember rows start at 0, remember to add 1
const rows = 127;
const columns = 8;

/**
 * Takes a range and returns the upper and lower halves of that range
 * @param {array} range number[]
 * @return {object} {lower: [number, number], upper: [number, number]}
 */
function halfRange(range) {
  const lowerTop = Math.floor((range[1] - range[0]) / 2);
  return { lower: [range[0], lowerTop], upper: [lowerTop + 1, range[1]] };
}

assert.deepStrictEqual(halfRange([0, 127]), {
  lower: [0, 63],
  upper: [64, 127],
});
// first seven letters are F or B
//! need to split into tuple (7, 3)

/**
 * Given the first 7 letters of a boarding pass it will find the row
 * @param {string} letters
 * @return {number}
 */
function findRow(letters) {}
