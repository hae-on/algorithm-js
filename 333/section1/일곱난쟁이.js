function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
