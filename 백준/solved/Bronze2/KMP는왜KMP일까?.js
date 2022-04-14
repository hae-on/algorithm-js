// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("-")

const sample = `Knuth-Morris-Pratt`;
const input = sample.split("-");

console.log(input.map((v) => v[0]).join(""));
