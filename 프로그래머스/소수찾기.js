function solution(n) {
  let answer = 0;
  let arr = [];

  arr[0] = 0;
  arr[1] = 0;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i] !== 0) {
      for (let j = i + i; j <= n; j += i) {
        arr[j] = 0;
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }
  return answer;
}

console.log(solution(10));
