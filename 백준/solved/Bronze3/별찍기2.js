const input = `5`;
const num = Number(input);
let star = "";

for (let i = 1; i <= num; i++) {
  for (let j = num - i; j >= 1; j--) {
    star += " ";
  }
  for (let k = 1; k <= i; k++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
