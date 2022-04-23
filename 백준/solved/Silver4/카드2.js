// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `6`;
const N = Number(input);
let card = Array.from({ length: N }, (v, i) => i + 1);

while (card.length) {
  if (card.length === 1) {
    break;
  } else {
    card.shift();
    card.push(card.shift());
  }
}
console.log(card[0]);

// 시간초과 -> 백준 통과는 연결 리스트로 해야 풀림
