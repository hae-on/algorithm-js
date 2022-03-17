// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `5
5
2
3
4
1`;
const input = sample.split("\n");
const N = +input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
