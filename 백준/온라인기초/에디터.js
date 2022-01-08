// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `abcd
3
P x
L
P y`;
const input = sample.split("\n");

let lStack = input[0].split("");
let rStack = [];
let word = "";

for (let i = 2; i < input.length; i++) {
  // P 뒤의 글자 출력
  if (input[i].length === 3) {
    word = input[i][2];
  }

  switch (input[i][0]) {
    case "L":
      if (lStack.length !== 0) rStack.push(lStack.pop());
      break;
    case "D":
      if (rStack.length !== 0) lStack.push(rStack.pop());
      break;
    case "B":
      if (lStack.length !== 0) lStack.pop();
      break;
    case "P":
      lStack.push(word);
  }
}

const result = [...lStack, ...rStack.reverse()];
console.log(result.join(""));
