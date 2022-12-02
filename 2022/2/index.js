const fs = require("fs");

const inputs = fs.readFileSync("./2022/2/input.txt", 'utf-8')
  .split("\n");

console.log({ inputs });


// values
const vMap = {
  A: 1, // rock
  B: 2, // papaer
  C: 3 // scissors
};

const keyMap = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors'
};

// highest score wins
// total score = sum of all scores for each round

let sum = 0;
for(let i = 0; i < inputs.length; i++) {
  const player = inputs[i][0];
  const opponent = inputs[i][2];
  const value = vMap[player];
  
  const result = winLooseOrDraw(player, opponent);
  if(result === 'win') {
    sum += (value + 6);
  } else if(result === 'loose') {
    sum += value;
  } else {
    sum += (value + 3);
  }
}

function winLooseOrDraw(a, b) {
  const typeA = keyMap[a];
  const typeB = keyMap[b];
  if(typeA === typeB) {
    return 'draw';
  } else if(typeA === 'rock' && typeB === 'scissors') {
    return 'win';
  } else if(typeA === 'paper' && typeB === 'rock') {
    return 'win';
  } else if(typeA === 'scissors' && typeB === 'paper') {
    return 'win';
  } else {
    return 'loose';
  }
}

console.log({ sum });