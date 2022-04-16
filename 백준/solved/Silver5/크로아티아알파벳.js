let input = `ljes=njak`;
String(input);

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let x of croatia) {
  input = input.split(x).join("a");
}

console.log(input.length);
