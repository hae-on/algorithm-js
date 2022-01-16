// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `24 18`;
const input = sample.split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

function solution(n, m) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return console.log(gcd(n, m)), console.log(lcm(n, m));
}

solution(a, b);
