function solution(number, k) {
  let answer = "";
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i];

    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  answer = stack.join("");
  return answer;
}

console.log(solution("1924", 2));
