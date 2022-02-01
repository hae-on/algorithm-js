// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
26 40 83
49 60 57
13 89 99`;
const input = sample.split("\n");

const N = Number(input[0]);
input.shift();

let cost = input.map((v) => v.split(" ").map(Number));

