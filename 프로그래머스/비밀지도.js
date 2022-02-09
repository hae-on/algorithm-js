function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let first =
      "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
    let second =
      "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);

    let tmp = "";

    for (let j = 0; j < n; j++) {
      if (first[j] === "1" || second[j] === "1") {
        tmp += "#";
      } else if (first[j] === "0" || second[j] === "0") {
        tmp += " ";
      }
    }
    answer.push(tmp);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
