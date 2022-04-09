// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `6 8 10
25 52 60
5 12 13
0 0 0`;
let input = sample.split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  const triangle = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const a = triangle[0];
  const b = triangle[1];
  const c = triangle[2];

  if (a ** 2 + b ** 2 === c ** 2) console.log("right");
  else console.log("wrong");
}
