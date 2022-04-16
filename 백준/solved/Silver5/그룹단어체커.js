// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `3
happy
new
year`;
const input = sample.split("\n");
const N = +input.shift();

let cnt = 0;

for (let i = 0; i < N; i++) {
  let word = input[i];
  let arr = [];
  let groupWord = true;
  for (let j = 0; j < input[i].length; j++) {
    if (arr.indexOf(word[j]) == -1) {
      arr.push(word[j]);
    } else {
      if (arr.indexOf(word[j]) !== arr.length - 1) {
        groupWord = false;
      }
    }
  }
  if (groupWord) cnt++;
}

console.log(cnt);
