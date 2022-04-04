// const [L, A, B, C, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `20
25
30
6
8`;
const [L, A, B, C, D] = sample.split("\n").map(Number);

const language = Math.ceil(A / C);
const math = Math.ceil(B / D);

const max = Math.max(language, math);

const play = L - max;

console.log(play);
