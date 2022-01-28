// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
4
7
10`;
const input = sample.split("\n");

const MOD = 1000000009;
const N = Number(input[0]);
input.shift();

let dy = Array.from({ length: N + 1 }, () => 0);
let num = Math.max(...input);

dy[1] = 1;
dy[2] = 2;
dy[3] = 4;

for (let j = 4; j <= num; j++) {
  dy[j] = (dy[j - 3] + dy[j - 2] + dy[j - 1]) % MOD;
}

for (let i = 0; i < N; i++) {
  let tmp = input[i];
  console.log(dy[tmp]);
}
