const fs = require("fs");
const input = fs.readFileSync("./2022/4/input.txt", 'utf-8')
  .split("\n")
  .map((line) => (line).split(","));

// for each pair of # ranges, return the number of times one range fully contains the other
// console.log({ input });
let sum = 0;
input.forEach((pair) => {
  const ol = partialOverlap(pair[0], pair[1]);
  if(ol) {
    sum += 1;
  }
});
console.log({ sum });
// part 2 test answer is 4

// PART TWO
function partialOverlap(a,b) {
  const [sa, ea] = a.split('-');
  const [sb, eb] = b.split('-');
  const startA = Number(sa);
  const endA = Number(ea);
  const startB = Number(sb);
  const endB = Number(eb);
  if(startA <= startB && endA >= startB) return true;
  else if(startB <= startA && endB > startA) return true;
  else if(startA >= startB && startA <= endB) return true;
  else if(startB >= startA && startB <= endA) return true;
  else return false;
}

// PART ONE
function hasFullOverlap(a, b) {
  const [startA, endA] = a.split('-');
  const [startB, endB] = b.split('-');
  const sA = Number(startA);
  const eA = Number(endA);
  const sB = Number(startB);
  const eB = Number(endB);
  if(sA <= sB && eA >= eB) {
    console.log(`a contains b --- ${a}-${b}`);
    return true;
  }
  else if(sB <= sA && eB >= eA) {
    console.log(`a is contained by b --- ${a}-${b}`);
    return true;
  }
  else {
    return false;
  }
}