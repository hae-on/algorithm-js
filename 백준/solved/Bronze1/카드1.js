// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `7`;
const N = Number(input);

let queue = new Array(N).fill().map((v, i) => i + 1);
let answer = [];

while (queue.length) {
  answer.push(queue.shift());
  queue.push(queue.shift());
  if (queue.length === 1) answer.push(queue.shift());
}

console.log(answer.join(" "));
