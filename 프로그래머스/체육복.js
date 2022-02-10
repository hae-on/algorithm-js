function solution(n, lost, reserve) {
  let answer = 0;
  let clothes = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    clothes[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    clothes[reserve[i] - 1]++;
  }

  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] === 0) {
      if (clothes[i - 1] === 2) {
        clothes[i]++;
        clothes[i - 1]--;
      } else if (clothes[i + 1] === 2) {
        clothes[i]++;
        clothes[i + 1]--;
      }
    }
    if (clothes[i] >= 1) answer++;
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
