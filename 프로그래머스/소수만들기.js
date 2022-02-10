function solution(nums) {
  let answer = 0;

  for (let i = 0; nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) answer++;
      }
    }
  }

  function isPrime(number) {
    if (number < 2) return true;
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i == 0) return false;
    }
    return true;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4]));
