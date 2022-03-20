// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

let input = `zZa`;
input = input.toLowerCase();

const count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  count[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...count);
const index = count.indexOf(max);
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (count[j] === max && index != j) {
    isSame = true;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
