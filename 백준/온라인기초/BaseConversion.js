// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `17 8
2
2 16`;
const input = sample.split("\n");

const [A, B] = input[0].split(" ").map((n) => Number(n));
const m = Number(input[1]);
const num = input[2].split(" ").reverse();

let answer = [];
let tmp = 0;

for (let i = 0; i < m; i++) {
  tmp += num[i] * Math.pow(A, i);
}

while (tmp / B !== 0) {
  answer.push(tmp % B);
  tmp = Math.floor(tmp / B);
}

console.log(answer.reverse().join(" ").trim());
