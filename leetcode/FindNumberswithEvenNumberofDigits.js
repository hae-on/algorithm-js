function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    let digit = 0;

    while (nums[i] > 0) {
      digit++;
      nums[i] = parseInt(nums[i] / 10);
    }
    if (digit % 2 === 0) answer++;
  }
  return answer;
}

console.log(solution([12, 345, 2, 6, 7896]));
