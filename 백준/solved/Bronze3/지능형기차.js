// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `0 32
3 13
28 25
39 0`;
const input = sample.split("\n");

let current = 0;
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const [off, on] = input[i].split(" ").map(Number);
  current -= off;
  current += on;
  answer = Math.max(answer, current);
}
console.log(answer);
