// const [N, A, M, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`;
const [N, A, M, B] = sample.split("\n").map((v) => v.split(" ").map(Number));

const sH = new Map();

for (let x of A) {
  if (sH.has(x)) sH.set(x, sH.get(x) + 1);
  else sH.set(x, 1);
}

const answer = [];

B.forEach((v) => answer.push(sH.get(v) || 0));

console.log(answer.join(" "));
