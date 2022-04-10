// const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const input = `5`;
const num = Number(input);

let star = "";

for (let i = num; i >= 2; i--) {
  star += " ".repeat(num - i) + "*".repeat(i * 2 - 1) + "\n";
}

for (let i = 1; i <= num; i++) {
  star += " ".repeat(num - i) + "*".repeat(i * 2 - 1) + "\n";
}

console.log(star);
