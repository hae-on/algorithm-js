// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.split(" ").map(Number));

const sample = `3
3 7
15 7
5 2`;
let input = sample.split("\n").map((v) => v.split(" ").map(Number));

const N = input.shift();
let paper = new Array(100).fill().map((el) => new Array(100).fill(false));

for (let i = 0; i < N; i++) {
  const square = input[i];
  const x = square[0];
  const y = square[1];

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      paper[x + j][y + k] = true;
    }
  }
}

const answer = paper.reduce((prev, curr) => {
  for (let el of curr) {
    if (el) prev++;
  }
  return prev;
}, 0);

console.log(answer);
