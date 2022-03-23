// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `2
1
3
2
3`;
const input = sample.split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  const k = +input.shift(); //1, 2 층수
  const n = +input.shift(); //3, 3 호수

  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}
