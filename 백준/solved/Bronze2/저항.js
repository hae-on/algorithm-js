// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `yellow
violet
red`;
const input = sample.split("\n");

const color = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

console.log((color[input[0]] * 10 + color[input[1]]) * 10 ** color[input[2]]);
