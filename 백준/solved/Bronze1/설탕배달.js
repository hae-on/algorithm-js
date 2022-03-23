// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = `18`;
let num = input * 1;

let cnt = 0;

while (true) {
  if (num % 5 === 0) {
    console.log(num / 5 + cnt);
    break;
  }
  if (num < 0) {
    console.log(-1);
    break;
  }
  cnt++;
  num -= 3;
}
