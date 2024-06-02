/* 🤖 알고리즘/자료구조: [유클리드 호제법] */
/* 📛 문제이름: 최대공약수와 최소공배수 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
const getLCM = (a, b, gcd) => {
  const mul = a * b
  return mul / gcd
}
const getGCD = (a, b) => {
  if (b===0) 
    return a
  const r = a % b
  return getGCD(b,r)
} 
readline.on('line', function(line) {
  input = line.split(" ").map(Number)
}).on('close', function () {
  const [n, m] = input
  const gcd = getGCD(n, m)
  const lcm = getLCM(n, m, gcd)
  console.log(gcd)
  console.log(lcm)
  process.exit();
});