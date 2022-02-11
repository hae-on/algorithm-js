function solution(arr) {
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

console.log(solution([2, 6, 8, 14]));
