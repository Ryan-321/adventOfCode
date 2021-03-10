// binary space partitioning
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

/**
 * Takes a range and returns the upper and lower range depending on direction or returns the file row number
 *
 * @param {array} range number[]
 * @param {string} pos F(front) or B(back), determining which half to take
 * @return {array|number} number[] | number
 */
function getRange(range, dir) {
  const half_the_differnce = Math.floor((range[1] - range[0]) / 2);

  if (half_the_differnce === 0) {
    if (dir === 'F' || dir === 'L') {
      return range[0];
    } else {
      return range[1];
    }
  } else {
    if (dir === 'F' || dir === 'L') {
      return [range[0], half_the_differnce + range[0]];
    } else {
      return [half_the_differnce + 1 + range[0], range[1]];
    }
  }
}

// ASSERTIONS getRange
assert.deepStrictEqual(getRange([0, 127], 'F'), [0, 63]);
assert.deepStrictEqual(getRange([0, 127], 'B'), [64, 127]);
assert.deepStrictEqual(getRange([44, 45], 'F'), 44);
assert.deepStrictEqual(getRange([44, 45], 'B'), 45);
assert.deepStrictEqual(getRange([32, 47], 'B'), [40, 47]);
assert.deepStrictEqual(getRange([44, 47], 'F'), [44, 45]);
assert.deepStrictEqual(getRange([0, 7], 'R'), [4, 7]);
assert.deepStrictEqual(getRange([4, 7], 'L'), [4, 5]);
assert.deepStrictEqual(getRange([4, 5], 'R'), 5);

// first seven letters are F or B
//! need to split into tuple (7, 3)
/**
 * Decodes column and row letters into their corresponding number given a range
 * @param {string} letters
 * @param {number[]} defaultRange
 * @return {number}
 */
function findSeat(letters, defaultRange) {
  const lettersArr = letters.split('');
  let currentRange = [];

  for (let i = 0; i < lettersArr.length; i++) {
    if (i === 0) {
      currentRange = getRange(defaultRange, lettersArr[i]);
    } else {
      currentRange = getRange(currentRange, lettersArr[i]);
    }
  }
  return currentRange;
}
// ASSERTIONS findSeat
assert.deepStrictEqual(findSeat('FBFBBFF', [0, 127]), 44);
assert.deepStrictEqual(findSeat('RLR', [0, 7]), 5);

const seatIdList = boardingPasses
  .map(([rowLetters, columnLetters]) => {
    const row = findSeat(rowLetters, [0, 127]);
    const column = findSeat(columnLetters, [0, 7]);
    return row * 8 + column;
  })
  .sort((a, b) => a - b) // to get highest flip the sort and take first number in the array
  .find((num, idx) => {
    // this is the 2nd part - just substract one
    // console.log(num, idx + 7);
    if (num !== idx + 7) {
      return true;
    }
  });

console.log(seatIdList - 1);
