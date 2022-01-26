// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `6
10 20 10 30 20 50`;
const input = sample.split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);

let dp = new Array(N).fill(0);
let arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIndex = -1;
  for (let j = 0; j < i; j++) {
    if (num[i] > num[j] && dp[j] > max) {
      max = dp[j];
      maxIndex = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(num[i]) : [num[i]];
}

let maxLength = Math.max(...dp);

console.log(maxLength);
console.log(arr[dp.indexOf(maxLength)].join(" "));

// 블로그 참조 다시 풀어볼 것
