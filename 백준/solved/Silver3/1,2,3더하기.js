// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `3
4
7
10`;
const input = sample.split("\n").map(Number);
const T = input.shift();

const dp = Array.from({ length: 11 }, () => 0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 0; i < T; i++) {
  for (let j = 4; j <= 10; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }
  console.log(dp[input[i]]);
}
