// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `5
1,1
2,3
3,4
9,8
5,2`;
const input = sample.split("\n").map((v) => v.split(",").map(Number));
const T = input.shift();

for (let i = 0; i < input.length; i++) {
  console.log(input[i][0] + input[i][1]);
}

// console.log(input);
