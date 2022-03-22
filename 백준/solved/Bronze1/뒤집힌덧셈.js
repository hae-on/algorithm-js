// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `123 100`;
const input = sample.split(" ");

const revX = +input[0].split("").reverse().join("");
const revY = +input[1].split("").reverse().join("");

console.log(
  Number(
    String(revX + revY)
      .split("")
      .reverse()
      .join("")
  )
);
