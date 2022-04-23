// const [N, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `5
1 1 1 6 0
2 7 8 3 1`;
const [N, A, B] = sample.split("\n").map((v) => v.split(" ").map(Number));

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);
