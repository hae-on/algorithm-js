// const fs = require('fs');
// const [T, ...N] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `1
13`;
const [T, ...N] = sample.split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  let num = (N[i] * 1).toString(2) + "";
  let result = [];
  for (let j = num.length - 1; j >= 0; j--) {
    if (num[j] === "1") result.push(num.length - j - 1);
  }
  answer += result.join(" ") + "\n";
}
console.log(answer);
