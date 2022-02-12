function solution(priorities, location) {
  let answer = 1;
  let max = Math.max(...priorities);
  while (priorities.length > 0) {
    if (priorities[0] === max) {
      if (location === 0) {
        return answer;
      }
      answer++;
      priorities.shift();
      max = Math.max(...priorities);
    } else {
      priorities.push(priorities.shift());
    }
    if (location !== 0) {
      location--;
    } else {
      // location이 0이여서 맨 처음인데 max가 아니여서 맨 뒤로 보내졌을 경우
      location = priorities.length - 1;
    }
  }
  return -1;
}

console.log(solution([2, 1, 3, 2], 2));
