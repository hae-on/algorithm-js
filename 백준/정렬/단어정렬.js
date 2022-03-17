// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sample = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;
const input = sample.split("\n");
const N = +input.shift();

const answer = [...new Set(input)].sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else {
    if (a > b) return 1;
    else return -1;
  }
});

console.log(answer.join("\n"));
