const fs = require('fs');

// notes - puzzle one
  // forward is horizontal
  // down increases depth - positive
  // up decreases depth - negative

const inputs = fs.readFileSync('./2021/day2/input.txt', 'utf-8')
  .split('\n');

function puzzleOne(inputs) {
  const position = { h: 0, d: 0 };

  inputs.forEach((input) => {
    const [dir, n] = input.split(' ');
    const num = Number(n);
    if(dir === 'forward') {
      position.h += num;
    } else if(dir === 'down') {
      position.d += num;
    } else if(dir === 'up') {
      position.d -= num;
    }
  });
  return position.d * position.h;
}

// console.log('puzzle one', puzzleOne(inputs));


// notes - puzzle one
  // forward 
  // down increases aim - positive
  // up decreases aim - negative

function puzzleTwo(inputs) {
  const position = { h: 0, d: 0, a: 0 };

  inputs.forEach((input) => {
    const [dir, n] = input.split(' ');
    const num = Number(n);

    if(dir === 'forward') {
      position.h += num;
      position.d += position.a * n;
    } else if(dir === 'down') {
      position.a += num;
    } else if(dir === 'up') {
      position.a -= num;
    }
    console.log({ input });
    console.log({ position });
    console.log('***************');
  });
  return position.h * position.d;
}

console.log('puzzle two', puzzleTwo(inputs));

