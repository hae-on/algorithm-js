// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `4
1 3 5 7`;
const input = sample.split("\n");

const N = input.shift();
const num = input.shift().split(" ").map(Number);

let cnt = 0;

function prime(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return;
  }
  cnt++;
}

for (let j = 0; j < N; j++) {
  prime(num[j]);
}

console.log(cnt);
