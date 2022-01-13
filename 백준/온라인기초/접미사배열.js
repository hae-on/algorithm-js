// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `baekjoon`;
const input = sample.split("");
const stack = [...input];
const tmp = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  tmp.unshift(stack.pop());
  answer.push(tmp.join("").trim());
}
console.log(answer.sort().join("\n").trim());
