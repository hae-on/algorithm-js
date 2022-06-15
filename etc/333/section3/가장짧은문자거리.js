function solution(s, t) {
  let answer = [];
  let cnt = 1000;
  for (let x of s) {
    if (x === t) {
      cnt = 0;
      answer.push(0);
    } else {
      cnt++;
      answer.push(cnt);
    }
  }
  cnt = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      cnt = 0;
    } else {
      cnt++;
      answer[i] = Math.min(answer[i], cnt);
    }
  }
  return answer;
}

console.log(solution("teachermode", "e"));
