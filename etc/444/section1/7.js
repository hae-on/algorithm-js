function solution(day, arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === day) cnt++;
  }
  return cnt;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
