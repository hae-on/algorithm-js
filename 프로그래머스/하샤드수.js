function solution(arr) {
  return !(arr % arr.split("").reduce((a, b) => +a + +b));
}

console.log(solution("10"));
