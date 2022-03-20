// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `121
1231
12421
0`;
const input = sample.split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  let reverse = input[i].split("").reverse().join("");
  console.log(reverse === input[i] ? "yes" : "no");
}
