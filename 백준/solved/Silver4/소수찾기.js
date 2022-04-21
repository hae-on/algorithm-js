// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `4
1 3 5 7`;
const input = sample.split("\n");
const N = +input.shift();
const num = String(input).split(" ").map(Number);

let cnt = 0;

function prime(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return;
  }
  cnt++;
}

for (let i = 0; i < N; i++) {
  prime(num[i]);
}

console.log(cnt);
