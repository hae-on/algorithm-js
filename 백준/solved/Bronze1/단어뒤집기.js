// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `2
I am happy today
We want to win the first prize`;
const input = sample.split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  const line = input[i].split(" ");

  for (let j = 0; j < line.length; j++) {
    line[j] = line[j].split("").reverse().join("");
  }
  console.log(line.join(" "));
}
