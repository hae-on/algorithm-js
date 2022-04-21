const input = `110`;
const num = Number(input);
let han = 0;

for (let i = 1; i < num; i++) {
  if (i < 100) han++;
  else {
    const N = String(i).split("").map(Number);
    if (N[0] - N[1] === N[1] - N[2]) han++;
  }
}
console.log(han);
