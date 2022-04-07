const sample = `10 10`;
let [H, M] = sample.split(" ").map(Number);

M -= 45;

if (M < 0) {
  M += 60;
  H--;

  if (H === -1) {
    H = 23;
  }
}

console.log(H + " " + M);
