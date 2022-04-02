// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `10
65
100
30
95`;
const input = sample.split("\n").map(Number);

let sum = 0;
let answer = 0;

for (let x of input) {
  if (x < 40) x = 40;
  sum += x;
}

answer = sum / input.length;

console.log(sum);

console.log(answer);
