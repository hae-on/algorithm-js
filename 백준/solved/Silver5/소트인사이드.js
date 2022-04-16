const sample = `2143`;
const num = sample.split("");

let answer;
answer = num.sort((a, b) => b - a);

console.log(answer.join(""));
