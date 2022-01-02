// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
3 1 4 3 2`;
const input = sample.split("\n");

// [3, 1, 4, 3, 2]의 배열 형태로
let arr = input[1].split(" ").map(Number);

// 오름차순 정렬 [1, 2, 3, 3, 4 ]
arr.sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (let x of arr) {
  answer += sum + x;
  sum += x;
}

console.log(answer);
