function solution(s, t) {
  let cnt = 0;
  for (let x of s) {
    if (x === t) cnt++;
  }
  return cnt;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
