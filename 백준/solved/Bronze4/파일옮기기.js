// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number))

const sample = `1 2
3 4`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));

const [A, B] = input[0];
const [C, D] = input[1];

console.log(Math.min(A + D, B + C));
