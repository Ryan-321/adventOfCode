const fs = require('fs');
const assert = require('assert').strict;

const rules = fs
  .readFileSync('./2020/day7/input.txt', 'utf-8')
  .split('\n')
  .map((rule) => {
    const [containerKey, bags] = rule.split('contain');

    const key = containerKey.replace(/( bags )/, '');
    const value = bags.split(',').map((b) => {
      const [_1, num, adj, color, _2] = b.split(' ');
      console.log({ _1, num, adj, color, _2 });
      return {
        [`${adj} ${color}`]: num,
      };
    });

    console.log({ key });
    // console.log({ bags });
    console.log({ value });
  });

const num = 0;
const example = {
  'adj color': {
    'adj color1': num,
    'adj color2': num,
    'adj color3': num,
  },
};

// console.log({ rules });
