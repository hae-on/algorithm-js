// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
1 45000
6 10
13 17`;
const input = sample.split("\n");
const N = input.shift();

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 0; i < N; i++) {
  let num = input[i].split(" ").map(Number);
  console.log(lcm(num[0], num[1]));
}
