function solution(a, b, c) {
  let min;
  if (a > b) min = b;
  else min = a;
  if (min > c) min = c;
  return min;
}

console.log(solution(6, 5, 11));
