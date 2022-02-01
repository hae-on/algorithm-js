// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;
const input = sample.split("\n");

const n = Number(input[0]);
input.shift();

const dp = [];
for (let i = 0; i < n; i++) {
  dp.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let prev;
    if (j === 0) prev = dp[i - 1][j];
    else if (j === i) prev = dp[i - 1][j - 1];
    else prev = Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    dp[i][j] += prev;
  }
}
console.log(Math.max(...dp[n - 1]));
