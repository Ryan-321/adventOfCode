// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?

const fs = require('fs');

const inputs = fs.readFileSync('./2020/day2/input.txt', 'utf-8')
  .split('\n')
  .map((input) => input.split(" "));

function testInput_1(inputs) {
  let valid = 0;
  inputs.forEach((input) => {
    const [lowerLimit, upperLimit] = input[0].split("-");
    const letter = input[1][0];

    // find occurences
    let occurences = 0;
    input[2].split("").forEach((l) => {
      if(letter === l) {
        occurences++;
      }
    });

    // test
    if(occurences >= lowerLimit && occurences <= upperLimit) {
      valid++;
    }
  });
  return valid;
}

// console.log(testInput_1(inputs));

// got wrong write tests? No, need to actually read the problem
function testInput_2(inputs) {
  let valid = 0;
  inputs.forEach((input) => {
    const letter = input[1][0];
    const testString = input[2];
    // test string starts at 1, not 0, so subtracting 1 to keep indices in line
    const indices = input[0]
      .split("-")
      .map((num) => Number(num) - 1);
    
    const matches = indices.reduce((acc, idx) => {
      if (testString[idx] === letter) {
        acc++;
      }
      return acc;
    }, 0);

    if (matches === 1) {
      valid++;
    }
  });
  return valid;
}

// 323 was wrong - matching every index
// 683 was wrong - matching 1 or 2 of the indices

// answer should be 360!

console.log(testInput_2(inputs));