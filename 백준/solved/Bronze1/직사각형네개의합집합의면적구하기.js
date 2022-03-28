// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `1 2 4 4
2 3 5 7
3 1 6 5
7 3 8 6`;
const input = sample.split("\n");

let paper = new Array(101).fill(false).map((el) => new Array(101).fill(false));

for (let i = 0; i < 4; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      paper[j][k] = true;
    }
  }
}

let answer = 0;
for (let i = 0; i < 101; i++) {
  for (let j = 0; j < 101; j++) {
    if (paper[i][j]) answer++;
  }
}

console.log(answer);
