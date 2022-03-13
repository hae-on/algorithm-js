// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `3 3 6`;
const input = sample.split(" ");

let num = input.map(Number).sort((a, b) => a - b);

if (num[0] === num[1] && num[1] === num[2] && num[0] === num[2]) {
  console.log(10000 + num[0] * 1000);
} else if (num[0] == num[1] || num[1] == num[2]) {
  console.log(1000 + num[1] * 100);
} else {
  console.log(num[2] * 100);
}
