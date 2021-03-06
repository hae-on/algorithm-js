function solution(answers) {
  let answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) score[0]++;
    if (two[i % 8] === answers[i]) score[1]++;
    if (three[i % 10] === answers[i]) score[2]++;
  }

  let max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
