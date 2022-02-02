// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10
1 100 2 50 60 3 5 6 7 8`;
const input = sample.split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const dp = [];

for (let i = 0; i < N; i++) {
  dp[i] = A[i];
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i] && dp[i] < dp[j] + A[i]) {
      dp[i] = dp[j] + A[i];
    }
  }
}

console.log(Math.max(...dp));
