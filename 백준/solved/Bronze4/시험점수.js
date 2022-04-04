// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `100 80 70 60
80 70 80 90`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));
let min = 0;
let man = 0;

for (let i = 0; i < input[0].length; i++) {
  min += input[0][i];
  man += input[1][i];
}

console.log(Math.max(min, man));
