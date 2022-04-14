// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF`;
const input = sample.split("\n");

let cnt = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
      if (input[i][j] === "F") cnt++;
    }
  }
}
console.log(cnt);
