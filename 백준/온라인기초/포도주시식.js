// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `6
6
10
13
9
8
1`;
const input = sample.split("\n");

const n = Number(input[0]);
input.shift();
let num = input.map(Number);

let dp = Array.from({ length: n }, () => 0);
dp[1] = num[0];
dp[2] = num[0] + num[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + num[i - 1],
    dp[i - 3] + num[i - 1] + num[i - 2]
  );
}

console.log(dp[n]);
