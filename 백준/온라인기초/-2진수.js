// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let input = `-13`;
let n = Number(input);
let result = [];
let remainder = "";

while (n !== 0) {
  remainder = n % -2;
  if (remainder == -1 || remainder == 1) {
    n = Math.floor(n / -2) + 1;
    result.push(1);
  } else if (remainder === 0) {
    n = Math.floor(n / -2);
    result.push(0);
  }
}
console.log(result.length === 0 ? 0 : result.reverse().join(""));
