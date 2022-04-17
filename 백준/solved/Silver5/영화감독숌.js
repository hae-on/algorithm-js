// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const input = `2`;
let num = Number(input);
let cnt = 0;
let x = 665;

while (cnt != num) {
  x++;
  if (String(x).includes("666")) cnt++;
}

console.log(x);
