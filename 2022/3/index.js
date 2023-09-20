const fs = require("fs");
const input = fs.readFileSync("./2022/3/input.txt", 'utf-8')
  .split("\n");
// const input = fs.readFileSync("./2022/3/testInput.txt", 'utf-8')
//   .split("\n");
// For testInput.js, sum should equal 70

// Creates map to look up priority
const priorityMap = createPriorityMap();

// Loop through 3x3
  // combine every 3 rucksacks
// console.log({ input });
const grouped = [];
for(let i = 0; i < input.length; i+=3) {
  grouped.push([input[i], input[i + 1], input[i + 2]]);
}

// PART TWO     ***Loop through Rucksacks grouped by 3***

const result = grouped.map(([a, b, c]) => {
  const smallest = findSmallest(a, b, c);
  // loop through smallest
  for(let i = 0; i < smallest.length; i++) {
    const sCh = smallest[i];
    if(a.includes(sCh) && b.includes(sCh) && c.includes(sCh)) {
      // console.log({ sCh, a, b, c, smallest });
      return priorityMap[sCh];
    }
  }
  return 0;
}).reduce((acc, n) => (acc += n), 0);
console.log({ result });

function findSmallest(a, b, c) {
  const aL = a.length;
  const bL = b.length;
  const cL = c.length;
  if(aL <= bL && aL <= cL) return a;
  else if(bL <= aL && bL <= cL) return b;
  else if(cL <= aL && cL <= bL) return c;
}

// PART ONE     ***Loop through Rucksacks 1x1***
// const sum = input.map((rs, i) => {
//   const half = rs.length / 2;
//   const a = rs.slice(0, half);
//   const b = rs.slice(half);
  
//   console.log({ rs, len: rs.length, half, a, b, aL: a.length, bL: b.length });
//   // Loop through lengh of both halves, are equal
//   for(let i = 0; i < b.length; i++) {
//     const chB = b[i];
//     if(a.includes(chB)) {
//       return chB;
//     }
//   }
// })
// // .filter((ch) => ch)
// .reduce((acc, ch, index) => {
//   const n = priorityMap[ch];
//   console.log({ ch, n, acc, index });
//   acc += n;
//   return acc;
// }, 0);

function createPriorityMap() {
  const priorityMap = {};

  // Lowercase item types (a through z)
  for (let i = 97; i <= 122; i++) {
    const itemType = String.fromCharCode(i);
    const priority = i - 96; // Priority 1 through 26
    priorityMap[itemType] = priority;
  }

  // Uppercase item types (A through Z)
  for (let i = 65; i <= 90; i++) {
    const itemType = String.fromCharCode(i);
    const priority = i - 38; // Priority 27 through 52
    priorityMap[itemType] = priority;
  }
  // console.log({ priorityMap });
  return priorityMap;
}