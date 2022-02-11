function solution(n) {
  let result = 0;
  let check = true;
  let str = n.toString(2).split(1).length;
  while (check) {
    n++;
    if (str === n.toString(2).split(1).length) {
      answer = n;
      check = false;
    }
  }
  return answer;
}

console.log(solution(78));
