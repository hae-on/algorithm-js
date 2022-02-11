function solution(s) {
  let result = [];
  let answer = "";
  let arr = s.split(" ");

  result.push(Math.min(...arr));
  result.push(Math.max(...arr));

  answer = result.join(" ");

  return answer;
}

console.log(solution("1 2 3 4"));
