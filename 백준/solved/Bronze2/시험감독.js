// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `3
3 4 5
2 2`;
const input = sample.split("\n");

const N = +input.shift();
let A = input[0].split(" ").map((v) => Number(v));
const [B, C] = input[1].split(" ").map((v) => Number(v));

let answer = N;

A.forEach((i) => {
  i -= B;
  if (i > 0) {
    answer += Math.ceil(i / C);
  }
});

console.log(answer);
