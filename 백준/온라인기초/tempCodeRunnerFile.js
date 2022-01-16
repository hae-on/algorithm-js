
const solution = (n, m) => {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return console.log(gcd(n, m));
};