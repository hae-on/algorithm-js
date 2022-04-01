// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = `123456789123456789123456789123456789123456789123456789123456789123456789`;
const num = BigInt(input);
const answer = num % 20000303n;

console.log(answer.toString());
