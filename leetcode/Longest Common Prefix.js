function solution(strs) {
  let answer = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return answer;
    }
    answer += char;
  }
  return answer;
}

console.log(solution(["flower", "flow", "flight"]));
