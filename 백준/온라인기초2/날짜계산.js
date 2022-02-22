// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
// 메모리초과

const sample = `1 2 3`;
const input = sample.split(" ").map(Number);

const [E, S, M] = input.map((v) => v);

let cnt = 1;
while (true) {
  if ((cnt - E) % 15 === 0 && (cnt - S) % 28 === 0 && (cnt - M) % 19 === 0) {
    console.log(cnt);
    break;
  } else {
    cnt++;
  }
}
