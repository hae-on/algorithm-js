// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `200`;
let num = Number(input);
let sum = 0;
let cnt = 0;

// 1씩 증가하는 등차수열
for (let i = 1; ; i++) {
  sum += i;
  cnt++;
  if (sum > num) {
    cnt--;
    break;
  }
}
console.log(cnt);
