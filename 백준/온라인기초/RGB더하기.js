// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
26 40 83
49 60 57
13 89 99`;
const input = sample.split("\n");

const N = Number(input[0]);
input.shift();

let cost = input.map((v) => v.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  cost[i][0] = Math.min(cost[i - 1][1], cost[i - 1][2]) + cost[i][0];
  cost[i][1] = Math.min(cost[i - 1][0], cost[i - 1][2]) + cost[i][1];
  cost[i][2] = Math.min(cost[i - 1][0], cost[i - 1][1]) + cost[i][2];
}
console.log(Math.min(...cost[N - 1]));
