// const fs = require('fs');
// const [N, M, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `3 4 6`;
const [N, M, K] = sample.split(" ").map(Number);

console.log(parseInt(K / M), parseInt(K % M));
