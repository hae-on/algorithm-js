// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `3
4
7
10`;
const input = sample.split("\n");

const N = Number(input[0]);
const MOD = 1000000009;
const SIZE = 100000;

input.shift();
let num = input.map(Number);
let answer = "";

let dy = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));

dy[1][1] = dy[2][2] = dy[3][1] = dy[3][2] = dy[3][3] = 1;

for (let i = 4; i < SIZE; i++) {
  dy[i][1] = (dy[i - 1][2] + dy[i - 1][3]) % MOD;
  dy[i][2] = (dy[i - 2][1] + dy[i - 2][3]) % MOD;
  dy[i][3] = (dy[i - 3][1] + dy[i - 3][2]) % MOD;
}

num.map((n) => {
  answer = (dy[n][1] + dy[n][2] + dy[n][3]) % MOD;
  console.log(answer);
});
