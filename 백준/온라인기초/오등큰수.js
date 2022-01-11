// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `7
1 1 2 3 4 2 1`;
const input = sample
  .split("\n")[1]
  .split(" ")
  .map((a) => Number(a));

const arr = Array.from({ length: input.length }, (v, i) => -1);
const count = {};
input.forEach((x) => {
  count[x] = (count[x] || 0) + 1;
});
let tmp = [];

for (let i = 0; i < input.length; i++) {
  while (tmp.length && count[input[tmp[tmp.length - 1]]] < count[input[i]]) {
    arr[tmp.pop()] = input[i];
  }
  tmp.push(i);
}
console.log(arr.join(" "));
