// const [K, N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `20 10 320`;
const [K, N, M] = sample.split(" ").map(Number);

const snack = K * N;
let answer = snack - M;

if (answer < 0) answer = 0;

console.log(answer);
