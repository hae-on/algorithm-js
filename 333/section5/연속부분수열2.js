function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
