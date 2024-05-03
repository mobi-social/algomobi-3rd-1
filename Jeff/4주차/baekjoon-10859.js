const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const isPrime = (number) => {
  if (number < 2) return false
  for (let i = 2; i * i < number; i++){
    if(number % i === 0) return false
  }
  return true
}
const turnMap = [
  0,1,2,-1,-1,5,9,-1,8,6
]

// public static boolean check(String s) {
//   //        String pattern = "[347]+";
//   //        return !s.matches(pattern);
//           long num = Long.parseLong(s);
//           while (num > 0) {
//               if (num % 10 == 3 || num % 10 == 4 || num % 10 == 7) return false;
//               num /= 10;
//           }
//           return true;
//       }
  

const isInclude347 = (target) => {
  while (target > 0) {
    if (target % 10 === 3 || target % 10 === 4 || target % 10 === 7) return true
    target = Math.floor(target/10)
  }
  return false
}

const reverseNum = (target) => {
  let reversed = 0
  while (Math.floor(target / 10) > 0) {
    reversed = (reversed * 10) + target % 10
    target = Math.floor(target / 10)
  }
  if(target > 0) reversed = (reversed * 10) + target % 10
  return reversed
}

const turn360Each = (number) => {
  const turned = number.toString().split("").map((elem) => turnMap[parseInt(elem)])
  return parseInt(turned.join(""))
}

const solution = (target) => {
  // 1. target 에 3,4,7 이 있는지?
  if (isInclude347(target)) return "no"
  // 2. target 이 소수인가?
  if (!isPrime(target)) return "no"
  // 3. target 을 뒤집었을 때도 소수인가?
  const reversed = reverseNum(target)
  const turned = turn360Each(reversed)
  if (!isPrime(turned)) return "no"
  return "yes"
}

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const target = parseInt(input.shift())
  console.log(solution(target))
  process.exit();
});