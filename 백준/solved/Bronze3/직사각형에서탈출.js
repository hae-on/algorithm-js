// const [x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `6 2 10 3`;
const [x, y, w, h] = sample.split(" ").map(Number);
const result = [x, y, w - x, h - y];

console.log(Math.min(...result));
