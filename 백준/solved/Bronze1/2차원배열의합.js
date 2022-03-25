// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3`;
const input = sample.split("\n");
const [N, M] = input.shift().split(" ").map(Number);

// [ [ 1, 2, 4 ], [ 8, 16, 32 ] ]
let arr = Array.from({ length: N }, (_, i) =>
  input.shift().split(" ").map(Number)
);

const K = +input.shift();

for (let k = 0; k < K; k++) {
  const [i, j, x, y] = input.shift().split(" ").map(Number);
  let sum = 0;
  for (let a = i - 1; a <= x - 1; a++) {
    for (let b = j - 1; b <= y - 1; b++) {
      sum += arr[a][b];
    }
  }
  console.log(sum);
}

// 답 참조
