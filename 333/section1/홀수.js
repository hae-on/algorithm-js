function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  console.log(sum);
  console.log(min);
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
