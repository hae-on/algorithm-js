function solution(k, dungeons) {
  const len = dungeons.length;
  const visited = new Array(len).fill(false);
  let clearCnt = 0;

  const DFS = (k, curCnt) => {
    clearCnt = Math.max(curCnt, clearCnt);

    for (let i = 0; i < len; i++) {
      const [minK, useK] = dungeons[i];

      if (k >= minK && !visited[i]) {
        visited[i] = true;
        DFS(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  };
  DFS(k, 0);
  return clearCnt;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
