// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `800
700
900
198
330`;
const input = sample.split("\n").map(Number);

const minBuger = Math.min(...input.slice(0, 3));
const minDrink = Math.min(...input.slice(-2));

console.log(minBuger + minDrink - 50);
