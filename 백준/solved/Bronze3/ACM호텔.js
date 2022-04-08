// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `2
6 12 10
30 50 72`;
const input = sample.split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  let col = input[i].split(" ");
  let H = col[0];
  let W = col[1];
  let N = col[2];

  let floors = N % H;
  floors = floors === 0 ? H : floors;

  let rooms = Math.ceil(N / H);
  rooms = rooms < 10 ? "0" + rooms : rooms;

  console.log(`${floors}${rooms}`);
}
