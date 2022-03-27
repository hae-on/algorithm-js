// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `AABCDD
afzz
09121
a8EWg6
P5h3kx`;
const input = sample.split("\n");
const maxLength = Math.max(...input.map((i) => i.length));
let answer = "";

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] || "";
  }
}
console.log(answer);
