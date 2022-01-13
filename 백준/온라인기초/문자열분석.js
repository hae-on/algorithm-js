// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`;
const input = sample.split("\n");

let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "") continue;
  const answer = Array.from({ length: input.length }, (v, i) => 0);
  let word = input[i].split("");

  for (let x of word) {
    if (x >= "a" && x <= "z") answer[0]++;
    else if (x >= "A" && x <= "Z") answer[1]++;
    else if (x >= "0" && x <= "9") answer[2]++;
    else if (x === " ") answer[3]++;
  }
  result += answer.join(" ") + "\n";
}
console.log(result.trim());
