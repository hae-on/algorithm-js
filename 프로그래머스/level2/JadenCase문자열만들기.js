function solution(s) {
  s = s.toLowerCase();
  let answer = s
    .split(" ")
    .map((s) => {
      let word = s.split("");
      if (word[0] !== "") {
        word[0] = word[0].toUpperCase();
        return word.join("");
      }
    })
    .join(" ");
  return answer;
}

console.log(solution("3people unFollowed me"));
