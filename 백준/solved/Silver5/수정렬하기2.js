// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `5
5
4
3
2
1`;
const input = sample.split("\n").map(Number);
const N = input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
