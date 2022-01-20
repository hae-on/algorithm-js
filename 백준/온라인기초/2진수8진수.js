// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let input = `11001100`;
let oct = "";
while (input.length >= 3) {
  oct = parseInt(input.slice(input.length - 3), 2).toString(8) + oct;
  input = input.slice(0, input.length - 3);
}
console.log(input ? parseInt(input, 2).toString(8) + oct : oct);

console.log(input.length - 3);
