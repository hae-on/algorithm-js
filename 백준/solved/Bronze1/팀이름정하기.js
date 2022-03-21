// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `VELYLEOCEVE
5
YVXHOVE
LCOKO
OGWSJVEVEDLE
WGFVSJEL
VLOLUVCBLLQVESWHEEKC`;
const input = sample.split("\n");
const green = input.shift();
const N = +input.shift();

// 연두의 이름 배열
const greenName = [0, 0, 0, 0];

for (let i = 0; i < green.length; i++) {
  const x = green[i];
  if (x === "L") greenName[0]++;
  else if (x === "O") greenName[1]++;
  else if (x === "V") greenName[2]++;
  else if (x === "E") greenName[3]++;
  else continue;
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (input[i] > input[j]) {
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
}

// 팀 이름 배열
let cnt = [];

for (let i = 0; i < input.length; i++) {
  const tmp = Array.from({ length: 4 }, () => 0);
  for (let j = 0; j < input[i].length; j++) {
    const x = input[i][j];
    if (x === "L") tmp[0]++;
    else if (x === "O") tmp[1]++;
    else if (x === "V") tmp[2]++;
    else if (x === "E") tmp[3]++;
  }
  cnt.push(tmp);
}

//  연두 이름 + 팀 이름
let greenTeam = [];

for (let i = 0; i < N; i++) {
  let L = greenName[0] + cnt[i][0];
  let O = greenName[1] + cnt[i][1];
  let V = greenName[2] + cnt[i][2];
  let E = greenName[3] + cnt[i][3];
  let sum = ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
  greenTeam.push(sum);
}

let win = Math.max(...greenTeam);

console.log(input[greenTeam.indexOf(win)]);
