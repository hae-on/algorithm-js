function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) return a.localeCompare(b);
  });
}

console.log(solution(["sun", "bed", "car"], 1));
