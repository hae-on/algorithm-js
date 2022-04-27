// let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const sample = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`;
let [N, ...input] = sample.split("\n");
input = input
  .map((v) => v.split(" ").map((i) => Number(i) || i))
  .sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      if (a[2] > b[2]) return 1;
      else if (a[2] < b[2]) return -1;
      else {
        if (a[3] < b[3]) return 1;
        else if (a[3] > b[3]) return -1;
        else {
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
          else return 0;
        }
      }
    }
  });

let answer = [];

input.forEach((v) => answer.push(v[0]));
console.log(answer.join("\n"));
