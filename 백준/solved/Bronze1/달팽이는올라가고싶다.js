// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `2 1 5`;
const [A, B, V] = sample.split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));
