// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `4`;
const num = Number(input);

const row = num / 2;
const col = num - row;

const answer = parseInt((row + 1) * (col + 1));

console.log(answer);
