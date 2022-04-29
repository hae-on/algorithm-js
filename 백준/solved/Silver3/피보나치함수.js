// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `3
0
1
3`;
const input = sample.split("\n").map(Number);
const T = input.shift();

for (let i = 0; i < T; i++) {
  const fabonacci = [
    [1, 0],
    [0, 1],
  ];
  for (let j = 2; j <= input[i]; j++) {
    fabonacci[j] = [
      fabonacci[j - 1][0] + fabonacci[j - 2][0],
      fabonacci[j - 1][1] + fabonacci[j - 2][1],
    ];
  }
  console.log(fabonacci[input[i]].join(" "));
}
