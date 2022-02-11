function solution(n) {
  let answer = "";
  let restNum = "";

  while (n > 0) {
    restNum = n % 3;
    n = Math.floor(n / 3);

    if (restNum === 0) {
      n -= 1;
      restNum = 4;
    }
    answer += restNum;
  }
  return answer;
}

// 11 = 1 + 1
console.log(solution(4));
