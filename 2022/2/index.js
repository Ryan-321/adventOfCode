const fs = require("fs");
const inputs = fs.readFileSync("./2022/2/input.txt", 'utf-8')
  .split("\n");
const keyMap = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors'
};

// values
const vMap = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock
  Y: 2, // paper
  Z: 3 // scissors
};

const oMap = {
  X: 0,
  Y: 3,
  Z: 6
}

// highest score wins
// total score = sum of all scores for each round

let sum = 0;
for(let i = 0; i < inputs.length; i++) {  
  // sum += matchPoints(inputs[i][0], inputs[i][2]); - 1st round
  // sum += vMap[inputs[i][2]];

  sum += getShapePoints(inputs[i][0], inputs[i][2]);
}

console.log({ sum });
return sum;

// A: 1 rock
// B: 2 paper
// C: 3 scissors
// X: 0 lose
// Y: 3 draw
// Z: 6 win
function getShapePoints(opp, result) {
  const oppType = keyMap[opp];
  const r = Number(oMap[result]);

  if(r === 3) {
    // console.log({ oppType, opp: vMap[opp], r });
    return vMap[opp] + r;
  }
  else if(oppType === 'rock') { // their rock, win w/ paper, lose w/ scissors
    const shapeValue = r === 6 ? 2 : 3;
    // console.log({ oppType, shapeValue, r });
    return shapeValue + r;
  } else if(oppType === 'paper') { // their paper, win w/ rock, lose w/ scissors
    const shapeValue = r === 6 ? 3 : 1;
    // console.log({ oppType, shapeValue, r });
    return shapeValue + r;
  } else if(oppType === 'scissors') { // there scissors, win w/ rock, lose w/ paper
    const shapeValue = r === 6 ? 1 : 2;
    // console.log({ oppType, shapeValue, r });
    return shapeValue + r;
  }
} 

function matchPoints(a, b) {
  const opp = keyMap[a];
  const elf = keyMap[b];

  if(opp === elf) {
    return 3;
  } else if(elf === 'scissors') { // scissors beats paper, loses to rock
    return opp === 'paper' ? 6 : 0;
  } else if(elf === 'rock') { // rock beats scissors, loses to paper
    return opp === 'scissors' ? 6 : 0;
  } else if(elf === 'paper') { // paper beats rock, loses to scissors
    return opp === 'rock' ? 6 : 0;
  } else {
    return 0;
  }
}
// WIN KEY
// Rock defeats Scissors
// Scissors defeats Paper
// Paper defeats Rock