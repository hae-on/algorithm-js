function soliution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let x of times) {
    timeLine.push([x[0], "start"]);
    timeLine.push([x[1], "end"]);
  }
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of timeLine) {
    if (x[1] === "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  soliution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
