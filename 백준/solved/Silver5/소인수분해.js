const input = `72`;
let num = Number(input);
let answer = [];

for (let i = 2; i <= 72; i++) {
  while (num % i === 0) {
    answer.push(i);
    if (num / i === 1) break;
    num = num / i;
  }
}
console.log(answer.join("\n"));
