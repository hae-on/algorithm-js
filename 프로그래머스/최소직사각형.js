function solution(sizes) {
  const change = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let max = [0, 0];
  change.map(([w, h]) => {
    if (w > max[0]) max[0] = w;
    if (h > max[1]) max[1] = h;
  });
  return max[0] * max[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
