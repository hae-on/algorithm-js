// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `1000 100`;
const input = sample.split(" ");
const n = BigInt(input[0]);
const m = BigInt(input[1]);

console.log((n / m).toString());
console.log((n % m).toString());
