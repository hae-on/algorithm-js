const sample = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
const input = sample.split("\n");
const N = input.shift();

const answer = input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(answer.join("\n"));
