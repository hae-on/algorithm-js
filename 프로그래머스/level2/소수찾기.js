function prime(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return;
  }
  return true;
}

// set: 값 저장, arr: 고정된 문자열 제외한 값 담긴 배열, fixed: 고정된 문자열
function DFS(set, arr, fixed) {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newFixed = fixed + arr[i];
      let copyArr = [...arr];
      copyArr.splice(i, 1);

      if (prime(parseInt(newFixed))) {
        set.add(parseInt(newFixed));
      }
      DFS(set, copyArr, newFixed);
    }
  }
}

function solution(numbers) {
  numbers = numbers.split("");
  //   중복 방지
  let set = new Set();

  DFS(set, numbers, "");

  return set.size;
}

console.log(solution("17"));
