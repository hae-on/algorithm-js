// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
const input = sample.split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  let cnt = 0;
  let sum = 0;
  let quiz = input[i].split("");

  for (let j = 0; j < input[i].length; j++) {
    if (quiz[j] === "O") {
      cnt++;
    } else {
      cnt = 0;
    }
    sum += cnt;
  }
  console.log(sum);
}
