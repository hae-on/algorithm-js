// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `55-50+40`;
const input = sample.split("\n")[0];

solution(input);

function solution(arr) {
  const num = arr.split("-").map((el) =>
    el
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );
  const answer = num.reduce((acc, cur) => acc - cur);
  console.log(answer);
}
