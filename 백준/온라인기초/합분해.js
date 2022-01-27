// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `20 2`;
const input = sample.split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const MOD = 1000000000;
let dp = [];

for (let i = 0; i <= K; i++) {
  dp[i] = new Array(N + 1);
}

for (let i = 0; i <= N; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= K; i++) {
  for (let j = 0; j <= N; j++) {
    if (j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
    }
  }
}
console.log(dp[K][N]);
