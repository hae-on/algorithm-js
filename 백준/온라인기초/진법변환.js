// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `ZZZZZ 36`;
const input = sample.split(" ");

let answer = 0;
const regex = /[A-Z]/;

const N = input[0].split("").reverse();
const B = Number(input[1]);

for (let i = 0; i < N.length; i++) {
  if (regex.test(N[i])) {
    N[i] = N[i].charCodeAt(0) - 55;
    answer += N[i] * Math.pow(B, i);
  } else {
    N[i] = Number(N[i]);
    answer += N[i] * Math.pow(B, i);
  }
}

console.log(answer);
