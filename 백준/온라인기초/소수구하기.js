// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `3 16`;
const input = sample.split(" ");

let N = Number(input[0]);
let M = Number(input[1]);

let isPrime = Array(M + 1).fill(true);
isPrime[0] = isPrime[1] = false;

function findPrime() {
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (isPrime[i]) {
      let m = 2;
      while (i * m <= M) {
        isPrime[i * m] = false;
        m++;
      }
    }
  }
}

findPrime();

const result = [];
for (let i = N; i <= M; i++) {
  if (isPrime[i]) {
    result.push(i);
  }
}
console.log(result.join("\n"));
