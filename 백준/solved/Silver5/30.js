// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `102`;
const num = input.split("");

// 30배수 끝자리 0
if (!num.includes("0")) {
  console.log(-1);
} else {
  const sum = num.reduce((acc, cur) => acc + Number(cur), 0);
  //   각 자리수 합 3으로 나누어 떨어짐
  if (sum % 3 !== 0) return console.log(-1);
  const result = num.sort((a, b) => b - a);
  console.log(result.join(""));
}
