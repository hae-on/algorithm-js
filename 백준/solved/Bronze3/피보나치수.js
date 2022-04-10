// const input = require('fs').readFileSync('/dev/stdin').toString();

const input = `10`;
const num = Number(input);

let dy = [0, 1];

for (let i = 2; i <= num; i++) {
  dy[i] = dy[i - 1] + dy[i - 2];
}

console.log(dy[num]);
