// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = `10`;
const num = +input;

const DP = [0, 1];

for (let i = 1; i < num; i++) {
  DP[i + 1] = BigInt(DP[i - 1]) + BigInt(DP[i]);
}

console.log(DP[num].toString());
