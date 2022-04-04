// const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `-2 5`;
const [N, M] = sample.split(" ").map(Number);

const answer = Math.abs(N - M);

console.log(answer);
