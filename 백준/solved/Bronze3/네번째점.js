// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

const sample = `5 5
5 7
7 5`;
const input = sample.split("\n");

let arrX = [];
let arrY = [];
let x = "";
let y = "";

for (let i = 0; i < 3; i++) {
  const rec = input[i].split(" ");
  arrX.push(Number(rec[0]));
  arrY.push(Number(rec[1]));
}

arrX.sort((a, b) => a - b);
arrY.sort((a, b) => a - b);

x = arrX[1] === arrX[0] ? arrX[2] : arrX[0];
y = arrY[1] === arrY[0] ? arrY[2] : arrY[0];

console.log(`${x} ${y}`);
