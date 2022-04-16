const sample = `5
55 185
58 183
88 186
60 175
46 155`;
const input = sample.split("\n");
const N = input.shift();

const kgAndCm = input.map((v) => v.split(" ").map(Number));

for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (kgAndCm[i][0] < kgAndCm[j][0] && kgAndCm[i][1] < kgAndCm[j][1]) cnt++;
    }
  }
  console.log(cnt + 1);
}
