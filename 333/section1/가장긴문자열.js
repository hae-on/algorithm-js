function solution(s) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (max < x.length) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
