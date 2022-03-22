// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `5 20
99 101 1000 0 97`;
const input = sample.split("\n");

const [L, P] = input[0].split(" ").map(Number);
const participant = input[1].split(" ").map(Number);
const area = L * P;

const answer = participant.map((i) => i - area);

console.log(...answer);
