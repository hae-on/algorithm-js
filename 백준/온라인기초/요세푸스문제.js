// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `7 3`;
const input = sample.split(" ");

const [N, K] = input.map((n) => parseInt(n));
const queue = Array.from({ length: N }, (v, i) => i + 1);
let answer = "<";

while (queue.length) {
  for (let i = 0; i < K; i++) {
    queue.push(queue.shift());
  }
  if (queue.length === 1) {
    answer += `${queue.pop()}>`;
  } else {
    answer += `${queue.pop()}, `;
  }
}
console.log(answer);
