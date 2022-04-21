const sample = `14
push 1
push 2
top
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
top`;
const input = sample.split("\n");
const N = +input.shift();

let result = [];
let stack = [];

for (let i = 0; i < N; i++) {
  switch (input[i]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
