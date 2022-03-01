function soliution(arr) {
  let answer = [];

  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

console.log(soliution([1, 2, 3, -3, -2, 5, 6, -6]));
