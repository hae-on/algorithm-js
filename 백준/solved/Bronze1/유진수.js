// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = `1236`;
const num = input * 1;

let flag = false;

for (let i = 1; i < input.length; i++) {
  const front = input.slice(0, i).split("");
  const back = input.slice(i).split("");
  const frontCal = front.reduce((acc, e) => acc * +e, 1);
  const backCal = back.reduce((acc, e) => acc * +e, 1);

  if (frontCal === backCal) {
    flag = true;
    break;
  }
}

console.log(flag ? "YES" : "NO");
