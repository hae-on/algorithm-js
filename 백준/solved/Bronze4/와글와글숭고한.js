// const [S, K, H] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const sample = `19 8 9`;
const [S, K, H] = sample.split(" ").map(Number);

if (S + K + H >= 100) console.log("OK");
else {
  if (Math.min(S, K, H) === S) console.log("Soongsil");
  else if (Math.min(S, K, H) === K) console.log("Korea");
  else console.log("Hanyang");
}
