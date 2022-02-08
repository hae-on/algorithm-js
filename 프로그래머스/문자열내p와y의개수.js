function solution(s) {
  let answer = true;
  s = s.toLowerCase();
  if (s.split("p").length === s.split("y").length) return (answer = true);
  return (answer = false);
}

console.log(solution("pPoooyY"));
