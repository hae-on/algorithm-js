const input = `10`;
let n = Number(input);
let cnt = 0;

while (n > 0) {
  n = parseInt(n / 5);
  cnt += n;
}
console.log(cnt);
