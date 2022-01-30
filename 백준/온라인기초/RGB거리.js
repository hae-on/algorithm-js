// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
26 40 83
49 60 57
13 89 99`;
const input = sample.split("\n");

const N = Number(input[0]);
input.shift();

let cost = input.map((v) => v.split(" ").map(Number));
// 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.
let dp = Array.from(Array(1001), () => Array(3));

let max = 1000005;
let min = max;

for (let k = 0; k < 3; k++) {
  dp[0][0] = dp[0][1] = dp[0][2] = max;
  dp[0][k] = cost[0][k];

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
  }
  for (let j = 0; j < 3; j++) {
    if (j !== k) min = Math.min(min, dp[N - 1][j]);
  }
}
console.log(min);

console.log(dp);

// 답 참고 나중에 다시 볼 것
