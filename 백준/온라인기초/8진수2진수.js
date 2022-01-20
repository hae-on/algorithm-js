// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let input = `314`;
let bin = "";
while (input.length !== 0) {
  if (input.length > 1) {
    bin =
      parseInt(input.slice(input.length - 1), 8)
        .toString(2)
        .padStart(3, "0") + bin;
  } else {
    bin = parseInt(input.slice(input.length - 1), 8).toString(2) + bin;
  }
  input = input.slice(0, input.length - 1);
}

console.log(input ? parseInt(input, 2).toString(2) + bin : bin);
