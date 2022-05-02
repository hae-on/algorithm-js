const input = `2`;
const num = Number(input);

let dp = Array.from({ length: num + 1 }, () => 0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[num]);
