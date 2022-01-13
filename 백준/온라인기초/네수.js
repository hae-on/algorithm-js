// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `10 20 30 40`;
const input = sample.split(" ");

let a = Number(input[0] + input[1]);
let b = Number(input[2] + input[3]);

console.log(a + b);
