// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
4
7
10`;
const input = sample.split("\n");

const N = Number(input[0]);

let dy = Array.from({ length: 11 }, () => 0);

dy[1] = 1;
dy[2] = 2;
dy[3] = 4;

for (let i = 1; i <= N; i++) {
  let tmp = input[i];
  for (let j = 4; j <= 10; j++) {
    dy[j] = dy[j - 3] + dy[j - 2] + dy[j - 1];
  }
  console.log(dy[tmp]);
}
