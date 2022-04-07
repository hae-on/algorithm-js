// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `20 30 10`;
const input = sample.split(" ").map(Number);

const sorting = input.sort((a, b) => a - b);

console.log(sorting[1]);
