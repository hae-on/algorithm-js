// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
const input = sample.split("\n");
const N = +input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));
