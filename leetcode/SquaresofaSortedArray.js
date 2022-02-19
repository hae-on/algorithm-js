function solution(nums) {
  let answer = [];

  for (let x of nums) {
    if (x > 0) {
      answer.push(Math.pow(x, 2));
    } else {
      answer.push(1 * Math.pow(x, 2));
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution([-4, -1, 0, 3, 10]));
