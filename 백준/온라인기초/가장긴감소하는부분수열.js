// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `6
10 30 10 20 20 10`;
const input = sample.split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);

let dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (num[i] < num[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));
