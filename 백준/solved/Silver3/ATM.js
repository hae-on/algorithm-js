const sample = `5
3 1 4 3 2`;
const input = sample.split("\n");
let time = input[1].split(" ").map(Number);
let sum = 0;
let answer = 0;

time.sort((a, b) => a - b);

for (let x of time) {
  answer += sum + x;
  sum += x;
}

console.log(answer);
