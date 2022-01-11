// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `4
3 5 2 7`;
const input = sample
  .split("\n")[1]
  .split(" ")
  .map((a) => Number(a));

const arr = Array.from({ length: input.length }, (v, i) => -1);
let tmp = [];

for (let i = 0; i < input.length; i++) {
  while (tmp.length && input[tmp[tmp.length - 1]] < input[i]) {
    arr[tmp.pop()] = input[i];
  }
  tmp.push(i);
}
console.log(arr.join(" "));
