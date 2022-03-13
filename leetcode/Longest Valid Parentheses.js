function solution(s) {
  let stack = [-1];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (stack.length === 1) stack[0] = i;
    else stack.pop();
    answer = Math.max(answer, i - stack[stack.length - 1]);
    console.log(i - stack[stack.length - 1]);
  }
  //   stack = [ 0 ],[ 0, 1 ],[ 0 ],[ 0, 3 ],[ 0 ],[ 5 ]
  //   stack[stack.length - 1] = 0, 1, 0, 3, 0, 5
  return answer;
}

console.log(solution(")()())"));
