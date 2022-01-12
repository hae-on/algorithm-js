// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `baekjoon`;
const input = sample.split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const count = new Array(26).fill(0);

input.forEach((i) => count[alphabet.indexOf(i)]++);

console.log(count.join(" "));
