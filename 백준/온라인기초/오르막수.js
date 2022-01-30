// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const input = `2`;
const num = Number(input);
const MOD = 10007;

let dp = [[], new Array(10).fill(1)];

for (let i = 2; i <= num; i++) {
  dp[i] = [];
  dp[i][0] = dp[i - 1][0] % MOD;
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
  }
}

let answer = dp[num].reduce((acc, cur) => acc + cur, 0) % MOD;
console.log(answer);
