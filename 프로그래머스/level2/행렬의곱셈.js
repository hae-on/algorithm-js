function solution(arr1, arr2) {
  var answer = [];
  let temp = [];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2[0].length; k++) {
      for (let j = 0; j < arr2.length; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
