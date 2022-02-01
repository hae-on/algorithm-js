// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`;
const input = sample.split("\n");

const T = Number(input[0]);
input.shift();

for (let i = 0; i < T; i++) {
  let count = Number(input[3 * i]);
  let up = input[3 * i + 1].split(" ").map(Number);
  let down = input[3 * i + 2].split(" ").map(Number);

  //   세로 기준 [하나도 안 붙이는 경우, 위 스티커, 아래 스티커]
  let dp = [[0, up[0], down[0]]];

  for (let j = 1; j < count; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + up[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + down[j],
    ];
  }
  console.log(Math.max(...dp[count - 1]));
}
