function solution(arr) {
  arr.length > 1 ? arr.splice(arr.indexOf(Math.min(...arr))) : (arr = [-1]);
  return arr;
}

console.log(solution([4, 3, 2, 1]));
