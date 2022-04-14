// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `380`;
const num = Number(input);

const coins = [500, 100, 50, 10, 5, 1];
let money = 1000 - num;
let cnt = 0;

for (let i = 0; i < coins.length; i++) {
  let rest = Math.floor(money / coins[i]);
  money -= rest * coins[i];
  cnt += rest;
}
console.log(cnt);
