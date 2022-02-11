function solution(brown, yellow) {
  let answer = [0, 0];
  for (let height = 3; height <= (brown + yellow) / height; height++) {
    let width = Math.floor((brown + yellow) / height);
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

console.log(solution(10, 2));
