// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `6 3`;
const input = sample.split(" ");

const N = input[0];
const K = input[1];

const divisor = [];
let answer = "";

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisor.push(i);
  }
}

if (divisor.length >= K) {
  console.log(divisor[K - 1]);
} else {
  console.log(0);
}
