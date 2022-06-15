function solution(arr) {
  let sum = 0;
  let odd = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
      sum += arr[i];
    }
  }
  answer.push(sum);
  answer.push(Math.min(...odd));
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
