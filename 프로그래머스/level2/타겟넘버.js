function solution(numbers, target) {
  let answer = 0;

//   자식요소부터 거꾸로
  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
    //   스택에서 제거
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
