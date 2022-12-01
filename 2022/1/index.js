const fs = require("fs");

let highestCalorieCount = 0;

const topThree = fs.readFileSync('2022/1/input.txt', 'utf-8')
  .split('\n\n') // split into groups
  .map((group) => {
    const num = group
      .split('\n')
      .map(Number)
      .reduce((acc, n) => {
        acc += n;
        return acc;
      }, 0);

      if(num >= highestCalorieCount) {
        highestCalorieCount = num;
      }
      return num;
  })
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, n) => {
    acc += n;
    return acc;
  }, 0);
  

console.log({ topThree });

// Need to retrieve 50 stars
