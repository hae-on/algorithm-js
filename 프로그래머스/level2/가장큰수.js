function solution(numbers) {
  let answer = numbers
    //   ""을 통해 2가 10보다 앞서게 정렬
    .map((s) => s + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] == "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
