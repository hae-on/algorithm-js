function solution(n) {
  return String(n)
    .split("")
    .reduce((a, b) => +a + +b);
}

console.log(solution(987));
