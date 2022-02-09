function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  let answer = [...new Set(arr)];
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
