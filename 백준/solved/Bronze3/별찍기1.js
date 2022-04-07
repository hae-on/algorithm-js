// const [A, B, C, D, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const input = `5`;
const num = Number(input);
let star = "";

for (let i = 1; i <= num; i++) {
  star += "*";
  console.log(star);
}
