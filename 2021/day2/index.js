const fs = require('fs');

// notes
  // forward is horizontal
  // down increases depth - positive
  // up decreases depth - negative

const inputs = fs.readFileSync('./2021/day2/input.txt', 'utf-8')
  .split('\n');

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

console.log({ position });
console.log('position product', position.d * position.h);

