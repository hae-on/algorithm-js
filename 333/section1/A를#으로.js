function solution(s) {
  let answer = [];
  for (let x of s) {
    if (x === "A") answer.push("#");
    else answer.push(x);
  }
  return answer.join("");
}

console.log(solution("BANANA"));
