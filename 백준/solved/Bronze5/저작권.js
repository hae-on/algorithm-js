// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sample = `38 24`;
const input = sample.split(" ").map(Number);
let answer = "";

answer = input[0] * (input[1] - 1) + 1;

console.log(answer);
