const fs = require('fs');
const assert = require('assert').strict;

const formsGrouped = fs
  .readFileSync('./2020/day6/input.txt', 'utf-8')
  .split('\n\n')
  .map((answers) => answers.split('\n'));

/**
 * takes a group's forms and counts affirmations and dedups, each letter represents an affirmation
 * @param {string[]} forms
 * @return {number}
 */
function countAffirmationsPerGroup(forms) {
  let memory = [];
  forms.forEach((form) => {
    const lettersNotInMemory = [...form].filter(
      (letter) => !memory.includes(letter),
    );
    memory = [...memory, ...lettersNotInMemory];
  });
  return memory.length;
}
assert.deepStrictEqual(countAffirmationsPerGroup(['abcx', 'abcy', 'abcz']), 6);

/**
 * counts a group answers to which everyone says yes
 * @param {string[]} forms
 * @return {number}
 */
function countAnswersPerGroup(forms) {
  const formsLen = forms.length;
  let answersCount = 0;
  let memory = {};
  forms.forEach((form) => {
    [...form].forEach((letter) => {
      if (memory[letter]) {
        memory[letter] += 1;
      } else {
        memory[letter] = 1;
      }
    });
  });

  for (const letter in memory) {
    if (memory[letter] === formsLen) {
      answersCount++;
    }
  }
  return answersCount;
}

/**
 * takes all the groups of forms and sums all the groups counts
 * @param {string[][]} groups nested array of strings
 * @return {number}
 */
function countGroups(groups) {
  return groups.reduce((acc, group) => {
    // const count = countAffirmationsPerGroup(group);  // PART ONE
    const count = countAnswersPerGroup(group); // PART TWO
    acc += count;
    return acc;
  }, 0);
}
// PART TWO
assert.deepStrictEqual(
  countGroups([
    ['abc'],
    ['a', 'b', 'c'],
    ['ab', 'ac'],
    ['a', 'a', 'a', 'a'],
    ['b'],
  ]),
  6,
);

// PART ONE
// assert.deepStrictEqual(
//   countGroups([
//     ['abc'],
//     ['a', 'b', 'c'],
//     ['ab', 'ac'],
//     ['a', 'a', 'a', 'a', 'b'],
//   ]),
//   11,
// );

console.log(countGroups(formsGrouped));
