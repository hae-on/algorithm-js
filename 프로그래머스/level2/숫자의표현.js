function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    //   홀수인 약수의 갯수 구하기
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(15));
