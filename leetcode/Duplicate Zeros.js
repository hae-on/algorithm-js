function solution(arr) {
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);

    if (arr[i] === 0) queue.push(0);

    arr[i] = queue.shift();
  }
  return arr;
}

console.log(solution([1, 0, 2, 3, 0, 4, 5, 0]));
