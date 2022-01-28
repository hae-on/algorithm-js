// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString()

const input = `4`;
const N = Number(input);
const MOD = 9901;

let dp = [1, 3];

for (let i = 2; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % MOD;
}
console.log(dp[N]);
