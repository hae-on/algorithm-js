// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;
const input = sample.split("\n");
const N = +input.shift();
const connect = +input.shift();
let graph = [...new Array(N + 1)].map(() => []);
let visited = [...new Array(N + 1)].fill(0);
let cnt = 0;

// 1-> 1번에 연결된 컴퓨터 2-> 2번에 연결된 컴퓨터...
for (let i = 0; i < connect; i++) {
  let start = Number(input[i].split(" ")[0]);
  let end = Number(input[i].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

visited[1] = 1;
function DFS(start) {
  // end 2 1 3 2 5 1 2 6 5 5 4
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      cnt++;
      DFS(end);
    }
  }
}
DFS(1);

console.log(cnt);
