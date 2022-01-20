// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `5
6
8
10
12
100`;
const input = sample.split("\n").map(Number);

const T = input.shift();

let result = [];
let max = Math.max(...input);
let isPrime = Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

input.map((x) => {
  let cnt = 0;
  for (let i = 2; i <= Math.floor(x / 2); i++) {
    if (isPrime[i] && isPrime[x - i]) {
      cnt++;
    }
  }
  result.push(cnt);
});

console.log(result.join("\n"));
