// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `1
2
3
4
5`;
const input = sample.split("\n").map(Number);

let answer = 0;

for (let x of input) {
  answer += x;
}

console.log(answer);
