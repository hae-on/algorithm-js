// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;
const input = sample.split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const noHear = new Set();
const noSee = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < N) noHear.add(input[i]);
  else noSee.add(input[i]);
}

// 듣보잡 = 듣지도 못한, 보지도 못한 둘 다
let answer = [];
noSee.forEach((x) => {
  if (noHear.has(x)) answer.push(x);
});
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
