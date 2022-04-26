const sample = `4
2 3 1
5 2 4 1`;
const input = sample.split("\n");

const N = input[0];
const distance = input[1].split(" ").map((v) => BigInt(v));
const price = input[2].split(" ").map((v) => BigInt(v));

let answer = 0n;

let curPrice = price[0];
for (let i = 0; i < N - 1; i++) {
  answer += curPrice * distance[i];
  if (curPrice > price[i + 1]) curPrice = price[i + 1];
}

console.log(String(answer));
