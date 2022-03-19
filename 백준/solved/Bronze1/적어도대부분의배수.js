// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `30 42 70 35 90`;
const input = sample.split(" ");

let cnt = 0;
let i = 1;

while (cnt < 3) {
  for (let x of input) {
    if (i % x === 0) cnt += 1;
  }
  // 적어도 세개의 자연수로 나누어지는 경우 break
  if (cnt >= 3) break;
  cnt = 0;
  i += 1;
}

console.log(i);
