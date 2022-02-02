// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const input = `2`;
const num = Number(input);

const dp = Array.from({ length: num + 1 }, () => 0);
dp[2] = 3;

// 홀수일 때 불가능
for (let i = 4; i <= num; i += 2) {
  dp[i] = dp[i - 2] * dp[2] + 2;
  for (let j = 4; j < i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}
console.log(dp[num]);
