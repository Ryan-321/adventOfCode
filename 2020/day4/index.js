const fs = require('fs');
// const _ = require('lodash');

const passports = fs.readFileSync('./2020/day4/input.txt', 'utf-8')
  .split('\n\n') // split by blank line
  .map((str) => { // need to formant each individual passport

    return  str.split('\n')
      .reduce((acc, s) => { // reduce into one object as a passport
        s.split(' ') // attributes are split by space
          .forEach((attr) => {
            const [key, value] = attr.split(':');

            acc[key] = value;
          });

        return acc;
      }, {});
  });

// console.log({ passports });

const REQUIRED_FIELDS = {
  byr: 'Birth Year',
  iyr: 'Issue Year',
  eyr: 'Expiration Year',
  hgt: 'Height',
  hcl: 'Hair Color',
  ecl: 'Eye Color',
  pid: 'Passport ID',
};
// cid: 'Country ID' // why even put in problem?

// part 1
const validPassports_1 = passports.filter((p) => {
  return Object.keys(REQUIRED_FIELDS).every((key) => !!p[key]);
});

// part 2
const validPassports_2 = validPassports_1.filter((p) => {
  return Object.keys(REQUIRED_FIELDS).every((key) => test(key, p[key]));
});

console.log({ totalPassports: passports.length });
console.log({ validPassports_1Len: validPassports_1.length });
console.log({ validPassports_2Len: validPassports_2.length });

function test(key, value) {
  switch (key) {
    case 'byr': {
      const num = Number(value);
      return 1920 <= num && num <= 2002;
    }
    case 'iyr': {
      const num = Number(value);
      return 2010 <= num && num <= 2020;
    }
    case 'eyr': {
      const num = Number(value);
      return 2020 <= num && num <= 2030;
    }
    case 'hgt': {
      const metric = value.slice(value.length - 2);
      const num = Number(value.substring(0, value.length - 2));

      if (metric === 'cm') {
        return 150 <= num && num <= 193;
      } else if (metric === 'in') {
        return 59 <= num && num <= 76;
      }
      return false;
    }
    case 'hcl': {
      return /^#{1}([0-9]|[a-f]){6}/.test(value);
    }
    case 'ecl':
      return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
    case 'pid': {
      return value.length === 9;
    }
    default:
      return false;
  }
}