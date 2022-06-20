function solution(a, b) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of a) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of b) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

console.log(solution('AbaAeCe', 'baeeACA'));
