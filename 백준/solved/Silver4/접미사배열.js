const input = `baekjoon`;

const stack = [...input];
const tmp = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  tmp.unshift(stack.pop());
  answer.push(tmp.join(""));
}

console.log(answer.sort().join("\n"));
