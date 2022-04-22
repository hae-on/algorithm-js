// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `4
3
0
4
0`;
const input = sample.split("\n").map(Number);
const K = input.shift();
let result = [];

for (let i = 0; i < K; i++) {
  if (input[i] !== 0) result.push(input[i]);
  else result.pop();
}

let answer = 0;

for (let i = 0; i < result.length; i++) {
  answer += result[i];
}

console.log(answer);
