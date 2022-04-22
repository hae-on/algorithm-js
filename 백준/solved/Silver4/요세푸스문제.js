const sample = `7 3`;
const [N, K] = sample.split(" ").map(Number);

const arr = Array.from({ length: N }, (v, i) => i + 1);
let answer = "<";

while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }
  if (arr.length === 1) {
    answer += `${arr.pop()}>`;
  } else {
    answer += `${arr.pop()}, `;
  }
}

console.log(answer);
