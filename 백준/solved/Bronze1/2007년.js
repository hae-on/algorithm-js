// const fs = require('fs');
// const [month, day] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sample = `1 1`;
const [month, day] = sample.split(" ");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

console.log(week[new Date(`2007-${month}-${day}`).getDay()]);
