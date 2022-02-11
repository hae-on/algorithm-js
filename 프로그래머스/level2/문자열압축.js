function solution(s) {
  let answer = [];

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let cnt = 1;
    let addstr = "";
    // 0, 1, 2, 3, 4, 5, 6, 7 / 0, 2, 4, 6 / 0, 3, 6 / 0, 4
    for (let j = 0; j < s.length; j += i) {
      let first = s.substring(j, j + i);
      let second = s.substring(j + i, j + i * 2);
      if (first === second) {
        cnt += 1;
      } else {
        if (cnt === 1) {
          addstr += first;
        } else {
          addstr += cnt + first;
          cnt = 1;
        }
      }
    }
    answer.push(addstr.length);
  }
  return Math.min(...answer);
}

console.log(solution("aabbaccc"));
