// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
ABC*+DE/-
1
2
3
4
5`;
const input = sample.split("\n");

const n = Number(input.shift());
const postfix = input.shift().split("");
const stack = [];
const regex = /[A-Z]/;

function changeNum(char) {
  const al = char.charCodeAt(0) - 65;
  return input[al];
}

for (let x of postfix) {
  if (regex.test(x)) {
    stack.push(changeNum(x));
  } else {
    const rt = Number(stack.pop());
    const lt = Number(stack.pop());
    if (x === "+") stack.push(lt + rt);
    else if (x === "-") stack.push(lt - rt);
    else if (x === "*") stack.push(lt * rt);
    else if (x === "/") stack.push(lt / rt);
  }
}

console.log(stack[0].toFixed(2));
