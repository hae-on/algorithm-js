function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i = -1;
    }
  }
  return nums.length;
}

console.log(solution([1, 1, 2]));
