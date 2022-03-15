// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `2143`;
const input = sample.split("");
let answer = 0;

answer = input.sort((a, b) => b - a);
console.log(answer.join(""));
