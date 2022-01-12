// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `A*(B+C)`;
const input = sample.split("");
const regex = /[A-Z]/;
let answer = "";
const stack = [];

for (let x of input) {
  if (regex.test(x)) {
    answer += x;
  } else if (x === "(") {
    stack.push(x);
  } else if (x === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  } else if (x === "+" || x === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.push(x);
  } else if (x === "*" || x === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      answer += stack.pop();
    }
    stack.push(x);
  }
}
while (stack.length) {
  answer += stack.pop();
}
console.log(answer);
