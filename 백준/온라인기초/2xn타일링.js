// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const input = `9`;
const n = Number(input);

let dy = Array.from({ length: n + 1 }, () => 0);

dy[1] = 1;
dy[2] = 2;

for (let i = 3; i <= n; i++) {
  dy[i] = (dy[i - 2] + dy[i - 1]) % 10007;
}

console.log(dy[n]);
