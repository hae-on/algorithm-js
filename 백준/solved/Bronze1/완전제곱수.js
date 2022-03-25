// const fs = require('fs');
// const [M,N] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `60
100`;
const [M, N] = sample.split("\n").map(Number);

let arr = [];

for (let i = Math.ceil(Math.sqrt(M)); i <= Math.floor(Math.sqrt(N)); i++) {
  arr.push(i ** 2);
}

if (arr.length) {
  console.log(arr.reduce((acc, cur) => acc + cur, 0));
  console.log(arr[0]);
} else console.log(-1);
