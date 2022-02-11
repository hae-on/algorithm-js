function solution(a, b) {
  let answer = "";
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016,${a},${b}`);
  answer = day[date.getDay()];
  return answer;
}

console.log(solution(5, 24));
