function solution(n, words) {
  let answer = [0, 0];
  let usedWord = [];

  usedWord.push(words[0]);

  for (let i = 1; i < words.length; i++) {
    let beforeWord = words[i - 1];
    let currentWord = words[i];

    if (
      beforeWord[beforeWord.length - 1] === currentWord[0] &&
      usedWord.indexOf(currentWord) === -1
    ) {
      usedWord.push(currentWord);
    } else {
      let turn = parseInt(i / n) + 1;
      let player = (i % n) + 1;
      return (answer = [turn, player]);
    }
  }
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
