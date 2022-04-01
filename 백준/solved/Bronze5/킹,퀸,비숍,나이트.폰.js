// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sample = `0 1 2 2 2 7`;
const input = sample.split(" ").map(Number);

const chess = [1, 1, 2, 2, 2, 8];
let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(chess[i] - input[i]);
}
console.log(answer.join(" "));
