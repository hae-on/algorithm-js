// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `()(((()())(())()))(())`;
const input = sample.split("");

const stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") stack.push("(");
  else {
    stack.pop();
    if (input[i - 1] === "(") answer += stack.length;
    else answer++;
  }
}
console.log(answer);
