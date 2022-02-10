function solution(nums) {
  let answer = 0;
  const half = nums.length / 2;
  const removeOverlap = [...new Set(nums)];
  if (half > removeOverlap) answer = removeOverlap;
  else {
    answer = half;
  }
  return answer;
}

console.log(solution([3, 1, 2, 3]));
