// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `6
3 4 2 12 6 8`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));
const T = +input.shift();

const answer = input.flat();

console.log(Math.max(...answer) * Math.min(...answer));
