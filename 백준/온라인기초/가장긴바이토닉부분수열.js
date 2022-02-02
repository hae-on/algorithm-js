// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10
1 5 2 1 4 3 4 5 2 1`;
const input = sample.split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);

const increaseDp = new Array(N).fill(1);
const decreaseDp = new Array(N).fill(1);

// 가장 긴 증가하는 부분 수열
for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (num[i] > num[j] && increaseDp[j] > max) {
      max = increaseDp[j];
    }
  }
  increaseDp[i] = max + 1;
}

// 가장 긴 감소하는 부분 수열 (뒤에서부터)
for (let i = N - 1; i >= 0; i--) {
  let max = 0;
  for (let j = i + 1; j < N; j++) {
    if (num[i] > num[j] && decreaseDp[j] > max) {
      max = decreaseDp[j];
    }
  }
  decreaseDp[i] = max + 1;
}

const answer = increaseDp.map((val, idx) => val + decreaseDp[idx]);

console.log(Math.max(...answer) - 1);
