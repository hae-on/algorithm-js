// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `baekjoon`;
const input = sample.split("");

const answer = [];

for (let i = 97; i <= 122; i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer);
