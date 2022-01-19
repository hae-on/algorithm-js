// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const input = `10`;

let answer = 1;

for (let i = 1; i <= +input; i++) {
  answer *= i;
}

console.log(answer);
