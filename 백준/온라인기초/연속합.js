// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10
10 -4 3 1 5 6 -35 12 21 -1`;
const input = sample.split("\n");

const N = Number(input[0]);
let num = input[1].split(" ").map(Number);

let dp = [];

for (let i = 0; i < N; i++) {
  if (dp[i - 1] + num[i] >= num[i]) {
    dp[i] = dp[i - 1] + num[i];
  } else {
    dp[i] = num[i];
  }
}
console.log(Math.max(...dp));
