// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10
10 -4 3 1 5 6 -35 12 21 -1`;
const input = sample.split("\n");

const N = Number(input[0]);
let num = input[1].split(" ").map(Number);

let dp = [];
let dp2 = [num[0]];

for (let i = 0; i < N; i++) {
  if (dp[i - 1] + num[i] >= num[i]) {
    dp[i] = dp[i - 1] + num[i];
  } else {
    dp[i] = num[i];
  }
}

for (let i = 1; i < N; i++) {
  if (dp2[i - 1] + num[i] >= dp[i - 1]) {
    dp2[i] = dp2[i - 1] + num[i];
  } else {
    dp2[i] = dp[i - 1];
  }
}

let dpMax = Math.max(...dp);
let dp2Max = Math.max(...dp2);

console.log(Math.max(dpMax, dp2Max));
