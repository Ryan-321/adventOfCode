// find the two entries that sum to 2020 and then multiply those two numbers together.

const fs = require('fs');

const rawInputs = fs.readFileSync('./2020/day1/input.txt', 'utf-8');
const inputs = rawInputs.split('\n').map((n) => Number(n));

function isSum2020(a, b) {
  return a + b === 2020;
}

// could make this return faster
function findMatch(list, depth) {
  depth++;
  const firstNum = list[0];
  const newList = list.slice(1);
  let product = 0;

  newList.forEach((n) => {
    if (isSum2020(firstNum, n)) {
      product = firstNum * n;
    }
  });
  if (product > 0) {
    return [product, depth];
  } else {
    return findMatch(newList, depth);
  }
}

console.log(findMatch(inputs, 0));


// find the three entries that sum to 2020 and then multiply those two numbers together.

function isSum2020_2(a, b, c) {
  return (a + b + c) === 2020;
}

// could make this return faster
function findMatch_2(list, depth) {
  depth++;
  const firstNum = list[0];
  const newList = list.slice(1);
  let product = 0;

  newList.forEach((n) => {
    const newerList = newList.slice(1);

    newerList.forEach((m) => {
      if (isSum2020_2(firstNum, n, m)) {
        product = firstNum * n * m;
      }
    });
  });

  if (product > 0) {
    return [product, depth];
  } else {
    return findMatch_2(newList, depth);
  }
}

console.log(findMatch_2(inputs, 0));