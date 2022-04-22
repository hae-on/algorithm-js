// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `5
4 1 5 2 3
5
1 3 7 9 5`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));

const arr = new Set(input[1]);

const answer = input[3].map((v) => (arr.has(v) ? 1 : 0));

console.log(answer.join("\n"));
