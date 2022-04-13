// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `1 2 3 4 5 6 7 8`;
const input = sample.split(" ").map(Number);

let asc = 0;
let desc = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] - input[j] === -1) asc++;
    else if (input[i] - input[j] === 1) desc++;
  }
}

if (asc === 7) console.log("ascending");
else if (desc === 7) console.log("descending");
else console.log("mixed");
