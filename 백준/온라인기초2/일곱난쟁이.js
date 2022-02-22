// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `20
7
23
19
10
15
25
8
13`;
const input = sample.split("\n");

let dwarf = input.map(Number).sort((a, b) => a - b);
const sum = dwarf.reduce((acc, cur) => acc + cur);
const minus = sum - 100;

let dwarf1, dwarf2;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (dwarf[i] + dwarf[j] === minus) {
      [dwarf1, dwarf2] = [i, j];
    }
  }
}

for (let i = 0; i < 9; i++) {
  if (i !== dwarf1 && i !== dwarf2) {
    console.log(dwarf[i]);
  }
}
