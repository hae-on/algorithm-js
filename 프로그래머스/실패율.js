function solution(N, stages) {
  let failReates = [];
  for (let i = 1; i <= N; i++) {
    const failUser = stages.filter((el) => el === i).length;
    const successUser = stages.filter((el) => el >= i).length;
    const failReate = failUser / successUser;

    failReates.push({ stage: i, rate: failReate });
  }
  failReates.sort((a, b) => {
    if (a.rate < b.rate) return 1;
    if (a.rate > b.rate) return -1;
  });
  return failReates.map((entry) => entry.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
