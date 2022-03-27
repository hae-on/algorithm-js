// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sample = `60466175 36`;
const [N, B] = sample.split(" ").map(Number);

const regex = /[a-z]/;
const num = parseInt(N, 10).toString(B);
let answer = "";

for (let x of num) {
  if (regex.test(x)) {
    x = x.toUpperCase();
    answer += x;
  } else answer += x;
}

console.log(answer);
