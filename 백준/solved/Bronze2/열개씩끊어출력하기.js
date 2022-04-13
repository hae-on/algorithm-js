// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = `OneTwoThreeFourFiveSixSevenEightNineTen`;

for (let i = 0; i < input.length; i += 10) {
  console.log(input.slice(i, i + 10));
}
