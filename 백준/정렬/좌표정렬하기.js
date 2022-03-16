// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `5
3 4
1 1
1 -1
2 2
3 3`;
const input = sample.split("\n");
const N = +input.shift();
const location = input.map((v) => v.split(" ").map(Number));

location.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(location.map((v) => v.join(" ")).join("\n"));
