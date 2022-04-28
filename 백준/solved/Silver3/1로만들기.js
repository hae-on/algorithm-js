const input = `10`;
const x = Number(input);

const DP = new Array(x + 1).fill(0);

// 왜 2부터 시작? -> 1로 만들어야하기 때문에 0과 1 자리는 필요 없음
for (let i = 2; i <= x; i++) {
  // 1 뺐을 떄 최솟값
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[x]);
