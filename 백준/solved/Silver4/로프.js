// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `2
10
15`;
let [N, ...k] = sample.split("\n").map(Number);
k.sort((a, b) => a - b);

let w = [];

for (let i = 0; i < N; i++) {
  w.push(k[i] * (N - i));
}
console.log(Math.max(...w));
