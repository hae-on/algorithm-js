// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `20
7
23
19
10
15
25
8
13`;
let input = sample.split("\n").map(Number);

input.sort((a, b) => a - b);
let sum = input.reduce((a, b) => a + b, 0);

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - (input[i] + input[j]) === 100) {
      input.splice(j, 1);
      input.splice(i, 1);
    }
  }
}

console.log(input);
