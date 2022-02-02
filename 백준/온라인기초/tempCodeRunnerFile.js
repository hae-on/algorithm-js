for (let i = 0; i < N; i++) {
  if (dp[i - 1] + num[i] >= num[i]) {
    dp[i] = dp[i - 1] + num[i];
  } else {
    dp[i] = num[i];
  }
}
console.log(dp);
console.log(Math.max(...dp));