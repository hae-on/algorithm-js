// const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const input = `5`;
const num = Number(input);

let star = "";
for (let i = 0; i <= num; i++) {
  for (let k = 0; k < i; k++) {
    star += " ";
  }
  for (let j = input - i; j >= 1; j--) {
    star += "*";
  }

  star += "\n";
}
console.log(star);
