// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10 4790
1
5
10
50
100
500
1000
5000
10000`;
const input = sample.split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((i) => Number(i));

//   베열 형태로 동전만 정리
const coins = input.map((i) => Number(i));

let cnt = 0;

for (let i = N - 1; i >= 0; i--) {
  if (coins[i] <= K) {
    cnt += Math.floor(K / coins[i]);
    K %= coins[i];
  }
  if (K === 0) break;
}
console.log(cnt);
