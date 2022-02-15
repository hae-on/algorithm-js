function solution(W, H) {
  return W * H - (W + H - gcd(W, H));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(solution(8, 12));
