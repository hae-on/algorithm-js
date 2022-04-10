// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sample = `0 1 0 1
1 1 1 0
0 0 1 1`;
const input = sample.split("\n").map((v) => v.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  let zeroCnt = 0;
  let cnt = 0;
  for (let j = 0; j < 4; j++) {
    let tmp = input[i][j];
    if (tmp === 0) zeroCnt++;
    else cnt++;
  }
  if (zeroCnt === 1 && cnt === 3) console.log("A");
  else if (zeroCnt === 2 && cnt === 2) console.log("B");
  else if (zeroCnt === 3 && cnt === 1) console.log("C");
  else if (zeroCnt === 4) console.log("D");
  else if (cnt === 4) console.log("E");
}
