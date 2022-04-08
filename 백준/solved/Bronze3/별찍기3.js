const input = `5`;
const num = Number(input);
let star = "";
for (let i = 0; i <= num; i++) {
  for (let j = input - i; j >= 1; j--) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
