// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `2
3 ABC
5 /HTP`;
const input = sample.split("\n");
const T = +input.shift();
let result = "";

for (let i = 0; i < input.length; i++) {
  let R = Number(input[i].split(" ")[0]);
  let S = input[i].split(" ")[1];
  for (let j = 0; j < S.length; j++) {
    result += S.split("")[j].repeat(R);
  }
  result += "\n";
}
console.log(result);
