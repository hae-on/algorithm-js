function solution(s) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
