// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `10110111`;

let bin = "0b" + input;
const answer = (BigInt(bin) * 17n).toString(2);

console.log(answer);
