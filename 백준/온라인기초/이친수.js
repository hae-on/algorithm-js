// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const input = `3`;
const n = Number(input);

let dy = [0, 1, 1];

for (let i = 3; i <= n; i++) {
  dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
}

console.log(BigInt(dy[n]).toString());
