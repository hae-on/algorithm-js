// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `3
config.sys
config.inf
configures`;
const input = sample.split("\n");

const N = +input.shift();
let answer = "";

for (let i = 0; i < input[0].length; i++) {
  let alp = input[0][i];
  let same = true;
  for (let j = 1; j < input.length; j++) {
    if (alp !== input[j][i]) {
      same = false;
      break;
    }
  }
  if (same) answer += alp;
  else answer += "?";
}

console.log(answer);
