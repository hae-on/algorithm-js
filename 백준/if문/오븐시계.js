// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `23 48
25`;
const input = sample.split("\n");

const current = input[0].split(" ").map(Number);
const hour = current[0];
const min = current[1];
const cookTime = +input[1];

const cookHour = parseInt((hour * 60 + min + cookTime) / 60);
const cookMin = parseInt((hour * 60 + min + cookTime) % 60);

console.log(cookHour >= 24 ? cookHour - 24 : cookHour, cookMin);
