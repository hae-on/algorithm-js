function solution(nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      nums1[i] = nums2[i - m];
    }
  }
  return nums1.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
