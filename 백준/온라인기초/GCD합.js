// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`;
const input = sample.split("\n");

const N = Number(input[0]);
let anwser = [];

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

for (let i = 1; i <= N; i++) {
  let num = input[i].split(" ");
  const numN = Number(num[0]);
  let result = 0;
  for (let j = 1; j <= numN; j++) {
    for (let k = j + 1; k <= numN; k++) {
      let gcds = gcd(Number(num[j]), Number(num[k]));
      result += gcds;
    }
  }
  anwser.push(result);
}
console.log(anwser.join("\n"));
