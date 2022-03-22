// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `0 4 2 5 6`;
const input = sample.split(" ").map(Number);
let answer = 0;

for (let x of input) {
  answer += Math.pow(x, 2);
}

console.log(answer % 10);
