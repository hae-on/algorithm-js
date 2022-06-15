function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    let num = x % 10;
    if (num === day) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
