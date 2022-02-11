function solution(clothes) {
  let answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    //   { headgear: 3, eyewear: 2 }
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
