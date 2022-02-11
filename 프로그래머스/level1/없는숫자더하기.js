function solution(numbers) {
  let sum = 45;
  return 45 - numbers.reduce((cur, acc) => cur + acc);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
