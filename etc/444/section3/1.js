function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s.split('').reverse().join(' ') != s) return 'NO';
  return answer;
}

console.log(solution('gooG'));
