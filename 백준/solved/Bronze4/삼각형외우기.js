// const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `60
70
50`;
const [A, B, C] = sample.split("\n").map(Number);
let answer = "";

if (A === 60 && (B === 60) & (C === 60)) answer = "Equilateral";
else if (A + B + C === 180 && (A === B || B === C || C === A))
  answer = "Isosceles";
else if (A + B + C === 180 && (A !== B) !== C) answer = "Scalene";
else if (A + B + C !== 180) answer = "Error";

console.log(answer);
