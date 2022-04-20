// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// 각 자리수 중 1이 몇 개 있는 지
const input = `23`;
let num = Number(input);

let N = num.toString(2);
let cnt = 0;

for (let i = 0; i < N.length; i++) {
  if (N[i] == 1) cnt++;
}

console.log(cnt);
