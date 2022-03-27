// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `Baekjoon Online Judge`;
const input = sample.split("");

let answer = "";

for (let i = 0; i < input.length; i++) {
  let word = input[i].charCodeAt(0);
  if (word >= 65 && word <= 90) {
    let upper = word + 13;
    if (upper > 90) {
      answer += String.fromCharCode(upper - 26);
    } else {
      answer += String.fromCharCode(upper);
    }
  } else if (word >= 97 && word <= 122) {
    let lower = word + 13;
    if (lower > 122) {
      answer += String.fromCharCode(lower - 26);
    } else {
      answer += String.fromCharCode(lower);
    }
  } else if (word === 32) {
    answer += " ";
  } else {
    answer += String.fromCharCode(word);
  }
}
console.log(answer);
