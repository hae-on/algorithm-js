// const fs = require('fs');
// const [N, T, C, P] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sample = `7 3 2 750`;
const [N, T, C, P] = sample.split(" ").map(Number);

const day = parseInt(N / T) === N / T ? parseInt(N / T) - 1 : parseInt(N / T);
const money = day * C * P;

console.log(money);
