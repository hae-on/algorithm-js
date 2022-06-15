function solution(str, s) {
  let answer = 0;
  for (let x of str) {
    if (x === s) answer++;
  }
  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
