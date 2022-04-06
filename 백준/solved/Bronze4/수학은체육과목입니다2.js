// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const input = `1000`;
const num = Number(input);
const finger = num % 8;

if (finger === 1) console.log(1);
else if (finger === 2 || finger === 0) console.log(2);
else if (finger === 3 || finger === 7) console.log(3);
else if (finger === 4 || finger === 6) console.log(4);
else console.log(5);
