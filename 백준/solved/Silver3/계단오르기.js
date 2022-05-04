// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `6
10
20
15
25
10
20`;
const input = sample.split("\n").map(Number);
const N = input.shift();

const dp = Array.from({ length: N }, () => 0);
dp[0] = input[0];
dp[1] = Math.max(input[0] + input[1], input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(input[i - 1] + input[i] + dp[i - 3], input[i] + dp[i - 2]);
}
console.log(dp[N - 1]);
