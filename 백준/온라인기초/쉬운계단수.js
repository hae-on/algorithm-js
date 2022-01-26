// const fs = require('fs');
// const input = +fs.readFileSync('/dev/stdin').toString();

const input = `1`;

let dp = [];
const MOD = 1000000000;
let answer = "";

dp[1] = new Array(10).fill(1);
dp[1][0] = 0;

for (let i = 2; i <= input; i++) {
  dp[i] = new Array(10).fill(0);

  dp[i][0] = dp[i - 1][1];
  dp[i][9] = dp[i - 1][8];

  for (let j = 1; j < 9; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
  }
}

answer = dp[input].reduce((acc, cur) => (acc + cur) % MOD);

console.log(answer);
