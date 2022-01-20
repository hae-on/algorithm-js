// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => x.split(" ").map(Number));

const sample = `3 3
1 7 11`;
const input = sample.split("\n").map((x) => x.split(" ").map(Number));
const [N, S] = input[0];
const broDis = input[1].map((x) => Math.abs(S - x));

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

if (N == 1) {
  console.log(broDis[0]);
} else {
  let gcds = gcd(broDis[0], broDis[1]);
  for (let i = 1; i < broDis.length; i++) {
    gcds = gcd(gcds, broDis[i]);
  }
  console.log(gcds);
}
