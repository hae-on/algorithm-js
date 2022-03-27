// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(Number));

const sample = `3 2
1 2
3 4
5 6
2 3
-1 -2 0
0 0 3`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));
const [N, M] = input.shift();
const [, K] = input.splice(N, 1).shift();

let answer = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    let v = 0;
    for (let k = 0; k < M; k++) {
      v += input[i][k] * input[N + k][j];
    }
    answer += v + " ";
  }
  answer += "\n";
}
console.log(answer);
