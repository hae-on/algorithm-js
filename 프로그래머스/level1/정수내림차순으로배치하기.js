function solution(n) {
  let num = String(n).split("").sort().reverse().join("");
  return +num;
}

console.log(solution(118372));
