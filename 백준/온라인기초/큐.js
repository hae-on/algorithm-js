// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`;
const input = sample.split("\n");

const queue = [];
const result = [];
let num = "";
let word = [];

const N = input.shift();

for (let i = 0; i < N; i++) {
  word = input[i].split(" ");
  if (input[i].includes("push")) {
    num = parseInt(word[1]);
  }

  switch (word[0]) {
    case "push":
      queue.push(num);
      break;
    case "pop":
      result.push(queue.length !== 0 ? queue.shift() : -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue.length === 0 ? 1 : 0);
      break;
    case "front":
      result.push(queue.length !== 0 ? queue[0] : -1);
      break;
    case "back":
      result.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
