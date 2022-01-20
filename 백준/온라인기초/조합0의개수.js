// const fs = require('fs');
// const [n,m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sample = `25 12`;
const [n, m] = sample.split(" ").map(Number);

// n! / (n-m)! m! 각각 2와 5 개수 구하기

const getTwoFive = (x) => {
  let two = 0;
  let five = 0;
  for (let i = 2; i <= x; i *= 2) {
    two += parseInt(x / i);
  }
  for (let i = 5; i <= x; i *= 5) {
    five += parseInt(x / i);
  }
  return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));
