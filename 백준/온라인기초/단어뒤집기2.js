// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `baekjoon online judge`;
const input = sample.split("");

let stack = [];
let queue = [];
let answer = "";
let isTag = false;

for (let i = 0; i <= input.length; i++) {
  let x = input[i];
  if (x === "<") {
    isTag = true;
    if (stack.length !== 0) {
      answer += stack.reverse().join("");
      stack = [];
    }
  } else if (x === ">") {
    isTag = false;
    answer += queue.join("") + x;
    queue = [];
    continue;
  } else if ((x === " " && !isTag) || x === undefined) {
    answer += stack.reverse().join("").trim() + (x === " " ? x : "");
    stack = [];
    continue;
  }
  if (isTag) {
    queue.push(x);
  } else if (!isTag) {
    stack.push(x);
  }
}

console.log(answer);
