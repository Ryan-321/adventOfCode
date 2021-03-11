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
 * takes all the groups of forms and sums all the groups counts
 * @param {string[][]} groups nested array of strings
 * @return {number}
 */
function countGroups(groups) {
  return groups.reduce((acc, group) => {
    const count = countAffirmationsPerGroup(group);
    acc += count;
    return acc;
  }, 0);
}

assert.deepStrictEqual(
  countGroups([
    ['abc'],
    ['a', 'b', 'c'],
    ['ab', 'ac'],
    ['a', 'a', 'a', 'a', 'b'],
  ]),
  11,
);

console.log(countGroups(formsGrouped));
