// const fs = require('fs');
// const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sample = `2 7`;
const [A, B] = sample.split(" ").map(Number);

console.log(B - A, B);
