// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;
const input = sample.split("\n");

const N = +input[0];
const arr = [];

// 예시 배열 형태로 담기 [1, 4], [3, 5]...
for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ");
  arr.push([+start, +end]);
}

// 끝나는 시간 기준 정렬
arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let answer = 0;
let et = 0;

for (let x of arr) {
  if (x[0] >= et) {
    answer++;
    et = x[1];
  }
}

console.log(answer);
