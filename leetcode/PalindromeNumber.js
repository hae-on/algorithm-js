function solution(x) {
  const reverse = x.toString().split("").reverse().join("");

  return x === Number(reverse);
}

console.log(solution(121));
