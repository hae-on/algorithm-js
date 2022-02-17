function solution(nums) {
  let answer = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
      answer = Math.max(answer, cnt);
    } else {
      cnt = 0;
    }
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 0, 1]));
