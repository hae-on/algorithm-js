// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `8
4
3
6
8
7
5
2
1`;
const input = sample.split("\n");

const N = Number(input[0]);
let arr = [];
let stack = [];
let answer = "";

for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

for (let j = 1; j <= N; j++) {
  let cnt = 1;
  while (cnt <= N && stack[stack.length - 1] != input[j]) {
    stack.push(arr.shift());
    answer += "+\n";
    cnt++;
  }
  if (stack[stack.length - 1] == input[j]) {
    stack.pop();
    answer += "-\n";
  } else {
    answer = "NO";
    break;
  }
}
console.log(answer);
