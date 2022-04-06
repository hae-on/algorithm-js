// const [sum, diff] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `3 1`;
const [sum, diff] = sample.split(" ").map(Number);

let x = (sum + diff) / 2;
let y = sum - x;

if (x < 0 || y < 0 || Math.floor(x) !== x) console.log(-1);
else console.log(x, y);
