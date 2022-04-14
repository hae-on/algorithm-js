const sample = `baekjoon`;
const input = sample.split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const count = new Array(26).fill(0);

input.map((i) => count[alphabet.indexOf(i)]++);

console.log(count);
