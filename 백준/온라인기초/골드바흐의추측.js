// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `8
20
42
0`;
const input = sample.split("\n").map(Number);
input.pop();

let result = "";
let max = Math.max(...input);
let isPrime = Array(max + 1).fill(true);

for (let i = 2; i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (isPrime[i] && isPrime[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      fail = true;
      break;
    }
  }
  if (!fail) result += `"Goldbach's conjecture is wrong."\n`;
});

console.log(result);
