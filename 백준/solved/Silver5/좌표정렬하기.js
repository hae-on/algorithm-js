const sample = `5
3 4
1 1
1 -1
2 2
3 3`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));
const N = input.shift();

const answer = input.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(answer.map((v) => v.join(" ")).join("\n"));
