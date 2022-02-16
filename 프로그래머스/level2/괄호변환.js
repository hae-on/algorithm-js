function solution(p) {
  let answer = "";
  let sum = 0;
  let check = true;

  if (p.length === 0) {
    return "";
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") sum++;
    else sum--;

    if (sum < 0) check = false;

    if (sum === 0) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1, p.length);

      //   올바른 괄호 x
      if (check === false) {
        answer += "(";
        answer += solution(v);
        answer += ")";

        for (let j = 1; j < i; j++) {
          if (p[j] === ")") answer += "(";
          if (p[j] === "(") answer += ")";
        }
        return answer;
      }
      // 올바른 괄호
      else {
        answer += u;
        answer += solution(v);
        return answer;
      }
    }
  }
}

console.log(solution(")("));
