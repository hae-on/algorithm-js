function solution(s) {
  let answer = "";
  let num = Number(s);
  if ((s.length === 4 || s.length === 6) && num === parseInt(s)) {
    return (answer = true);
  }
  return (answer = false);
}

console.log(solution("a234"));
