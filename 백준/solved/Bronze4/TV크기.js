// const [D, H, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `52 9 16`;
const [D, H, W] = sample.split(" ").map(Number);

const x = D / (H ** 2 + W ** 2) ** 0.5;

console.log(Math.floor(H * x), Math.floor(W * x));
