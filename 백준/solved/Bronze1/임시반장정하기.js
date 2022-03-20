// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 중복 반례
const sample = `5
1 1 1 1 1
1 1 1 1 1
1 3 4 5 5
3 3 3 3 3
4 4 4 4 4`;
// 5
// 2 3 1 7 3
// 4 1 9 6 8
// 5 5 2 4 4
// 6 5 2 6 7
// 8 4 2 2 2
const input = sample.split("\n");
const N = +input.shift();

// 이 식으로 풀 경우 중복 생겼을 때 오답 처리

// const data = input.map((n) => n.split(" ").map(Number));
// let maxClass = [];

// for (let i = 0; i < N; i++) {
//   const classes = Array(10).fill(0);
//   for (let j = 0; j < data.length; j++) {
//     classes[data[j][i]]++;
//   }
//   const max = Math.max(...classes);
//   max === 1 ? maxClass.push(0) : maxClass.push(classes.indexOf(max));
//   console.log(maxClass);
// }

// const student = Array(N).fill(0);

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < data[i].length; j++) {
//     if (data[i][j] === maxClass[i]) student[i]++;
//   }
// }

// console.log(student.indexOf(Math.max(...student)) + 1);

const arr = [];

input.map((item) => {
  arr.push(item.split(/\s/).map(Number));
});

let maxCount = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
  const set = new Set();
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i][j] === arr[k][j] && i !== k) set.add(k);
    }
  }

  if (maxCount < set.size) {
    maxCount = set.size;
    result = i;
  }
}

console.log(result + 1);
