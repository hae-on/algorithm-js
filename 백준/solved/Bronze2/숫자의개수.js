// const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `150
266
427`;
const [A, B, C] = sample.split("\n").map(Number);
const ABC = A * B * C;

for (let i = 0; i < 10; i++) {
  let str = ABC.toString().split(i);
  console.log(str.length - 1);
}
