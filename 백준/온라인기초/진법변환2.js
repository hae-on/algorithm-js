// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `60466175 36`;
const input = sample.split(" ");
let answer = "";

const [N, B] = input.map((n) => Number(n));
const regex = /[a-z]/;

const num = parseInt(N, 10).toString(B);

for (let x of num) {
  if (regex.test(x)) {
    x = x.toUpperCase();
    answer += x;
  } else answer += x;
}

console.log(answer);
