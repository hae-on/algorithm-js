// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `4
1 5 6 7`;
const input = sample.split("\n");

const N = Number(input[0]);
const card = input[1].split(" ").map(Number);

let dy = [0, ...card];

for (let i = 2; i < dy.length; i++) {
  for (let j = 1; j < i; j++) {
    dy[i] = Math.max(dy[i], dy[i - j] + dy[j]);
  }
}

console.log(dy[N]);
