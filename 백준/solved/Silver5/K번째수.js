// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `5 2
4 1 2 3 5`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));

const sort = input[1].sort((a, b) => a - b);
console.log(sort);
const N = input[0][1];

console.log(input[1][N - 1]);
