// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `1
2
3
5
8
13
21
34
55
89`;
const input = sample.split("\n").map(Number);

let sum = 0;
let tmp = 0;

for (let x of input) {
  sum += x;
  if (sum === 100) break;
  else if (sum > 100) {
    tmp = sum - x;
    if (100 - tmp >= sum - 100) break;
    else {
      sum = tmp;
      break;
    }
  }
}
console.log(sum);
