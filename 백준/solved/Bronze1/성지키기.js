// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5 8
....XXXX
........
XX.X.XX.
........
........`;
const input = sample.split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const castle = input;

// 따로 선언해줘야 for문 범위 변경 안 발생함
let row = N;
let col = M;

// X가 없는 줄 중 가장 큰 수
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (castle[i][j] === "X") {
      row--;
      break;
    }
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (castle[j][i] === "X") {
      col--;
      break;
    }
  }
}

console.log(Math.max(row, col));
