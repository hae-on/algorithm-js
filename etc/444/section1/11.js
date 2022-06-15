function solution(s) {
  let answer = 0;
  for (let x of s) {
    let n = x.charCodeAt();
    if (n >= 65 && n <= 90) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood'));
