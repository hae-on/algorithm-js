function solution(N, stages) {
  let failRates = [];
  for (let i = 1; i <= N; i++) {
    const failUser = stages.filter((el) => el === i).length;
    const successUser = stages.filter((el) => el >= i).length;
    const failRate = failUser / successUser;

    failRates.push({ stage: i, rate: failRate });
  }
  failRates.sort((a, b) => {
    if (a.rate < b.rate) return 1;
    if (a.rate > b.rate) return -1;
  });
  return failRates.map((entry) => entry.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
