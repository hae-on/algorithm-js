// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `10 5
1 10 4 9 2 3 8 5 7 6`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));
const N = input[0][0];
const T = input[0][1];
let answer = "";

for (let i = 0; i < N; i++) {
  if (input[1][i] < T) console.log(input[1][i]);
}
