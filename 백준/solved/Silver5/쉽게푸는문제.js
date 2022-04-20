// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `3 7`;
const [a, b] = sample.split(" ").map(Number);

let cnt = 0;
let num = 1;
let arr = [];

while (arr.length <= b) {
  arr.push(num);
  cnt++;
  if (cnt === num) {
    num++;
    cnt = 0;
  }
}

const result = arr.slice(a - 1, b);

console.log(result.reduce((acc, cur) => acc + cur, 0));
