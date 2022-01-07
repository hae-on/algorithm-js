// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
I am happy today
We want to win the first prize`;
const input = sample.split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");

  for (let j = 0; j < line.length; j++) {
    line[j] = line[j].split("").reverse().join("");
  }
  console.log(line.join(" "));
}
