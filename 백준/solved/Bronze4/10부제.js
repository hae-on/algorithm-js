// const [day, car] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `1
1 2 3 4 5`;
const [day, car] = sample.split("\n");

const answer = car.split(" ").filter((i) => i === day).length;

console.log(answer);
