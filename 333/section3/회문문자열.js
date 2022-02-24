function solution(s) {
  let answer = "YES";
  s = s.toUpperCase();
  if (s.split("").reverse().join("") !== s) {
    answer = "NO";
  }
  return answer;
}

console.log(solution("gooG"));
