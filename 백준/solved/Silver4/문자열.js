// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `adaabc aababbc`;
const [a, b] = sample.split(" ");
let min = a.length;

for (let i = 0; i < b.length - a.length + 1; i++) {
  let cnt = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) cnt++;
  }
  min = Math.min(min, cnt);
}

console.log(min);
