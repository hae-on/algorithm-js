// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `9999`;
const num = input.split("").map(Number);
let cnt = Array(10).fill(0);
let answer = 0;

for (let x of num) {
  if (x === 6) {
    if (cnt[x] > cnt[9]) cnt[9]++;
    else cnt[x]++;
  } else if (x === 9) {
    if (cnt[x] > cnt[6]) cnt[6]++;
    else cnt[x]++;
  } else cnt[x]++;
}

answer = Math.max(answer, ...cnt);
console.log(answer);
