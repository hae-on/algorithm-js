// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const sample = `39
40
41
42
43
44
82
83
84
85`;
const input = sample.split("\n").map(Number);

let result = [];

for (let i = 0; i < input.length; i++) {
  result.push(input[i] % 42);
}
result = new Set(result);
console.log([...result].length);
