// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = `level`;

let char = input.split("").reverse().join("");

if (input === char) console.log(1);
else console.log(0);
