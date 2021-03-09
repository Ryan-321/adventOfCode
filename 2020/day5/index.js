const fs = require("fs");
const assert = require("assert").strict;

const boardingPasses = fs
  .readFileSync("./2020/day5/input.txt", "utf-8")
  .split("\n")
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
 * @return {array|number} [number, number] | number
 */
function getRange(range, dir) {
  const lowerTop = Math.floor((range[1] - range[0]) / 2);

  if (lowerTop === 0) {
    if (dir === "F") {
      return range[0];
    } else {
      return range[1];
    }
  } else {
    if (dir === "F") {
      return [range[0], lowerTop + range[0]];
    } else {
      return [lowerTop + 1 + range[0], range[1]];
    }
  }
}

// ASSERTIONS
assert.deepStrictEqual(getRange([0, 127], 'F'), [0, 63]);
assert.deepStrictEqual(getRange([0, 127], 'B'), [64, 127]);
assert.deepStrictEqual(getRange([44, 45], 'F'), 44);
assert.deepStrictEqual(getRange([44, 45], 'B'), 45);
assert.deepStrictEqual(getRange([32, 47], 'B'), [40, 47]);
assert.deepStrictEqual(getRange([44, 47], 'F'), [44, 45]);

// first seven letters are F or B
//! need to split into tuple (7, 3)

/**
 * Given the first 7 letters of a boarding pass it will find the row
 * @param {string} letters
 * @return {number}
 */
function findRow(letters) {
  const lettersArr = letters.split("");
  const defaultRange = [0, 127];
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

console.log(findRow('FBFBBFF'));

