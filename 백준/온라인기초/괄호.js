// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;
const input = sample.split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const cases = input[i];
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(cases[j]);
    } else {
      if (stack.length === 0) answer = "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  console.log(answer);
}
