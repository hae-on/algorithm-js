// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `5
....X
..XX.
.....
.XX..
X....`;
const input = sample.split("\n");
const N = +input.shift();

let row = 0;
let col = 0;

for (let i = 0; i < N; i++) {
  row += input[i].split("X").filter((v) => v.includes("..")).length;

  let colCnt = 0;
  for (let j = 0; j < N; j++) {
    if (input[j][i] === ".") colCnt++;
    if (input[j][i] === "X" || j === N - 1) {
      if (colCnt >= 2) col++;
      colCnt = 0;
    }
  }
}
