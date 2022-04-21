const sample = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;
const input = sample.split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  let stack = [];
  let answer = "YES";
  let cases = input[i];
  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") stack.push("(");
    else {
      if (stack.length === 0) answer = "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  console.log(answer);
}
