// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

const sample = `10 3
1 2 3`;
const input = sample.split("\n");

const [N, M] = input[0].split(" ").map(Number);
const target = input[1].split(" ").map(Number);
const deque = Array.from({ length: N }, (v, i) => i + 1);
let cnt = 0;

for (let x of target) {
  while (true) {
    if (deque.indexOf(x) === 0) {
      deque.shift();
      break;
    }
    if (deque.indexOf(x) < deque.length - deque.indexOf(x)) {
      deque.push(deque.shift());
      cnt++;
    } else {
      deque.unshift(deque.pop());
      cnt++;
    }
  }
}
console.log(cnt);
