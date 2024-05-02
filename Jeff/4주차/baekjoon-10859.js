const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const isPrim = (number) => {
  if (number === 1) return false
  for (let i = 2; i * i <= number; i++){
    if(number % i === 0) return false
  }
  return true
}

const isInArr = (arr, char) => {
  if (arr.includes(char)) return true
  return false
}

const turnMap = {
  '0': '0',
  '1': '1',
  '2': '2',
  '5': '5',
  '6': '9',
  '8': '8',
  '9': '6',
}

const turn360Each = (arr) => {
  const turned = arr.map((elem) => turnMap[elem])
  return turned
}

const arrReverse = (arr) => {
  const reversed = arr.reverse()
  return reversed
}

const solution = (target) => {
  // 1. target 이 소수인가?
  if (!isPrim(target)) return "no"
  console.log("?")
  // 2. target 에 3,4,7 이 있는지?
  const splitArr = target.split("")
  if (isInArr(splitArr, '3')) return "no"
  if (isInArr(splitArr, '4')) return "no"
  if (isInArr(splitArr, '7')) return "no"

  // 3. target 을 뒤집었을 때도 소수인가?
  const reversed = arrReverse(splitArr)
  const turned = turn360Each(reversed)
  const result = parseInt(turned.join(""))
  if (!isPrim(result)) return "no"
  return "yes"
}

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const target = input.shift()
  const result = solution(target)
  console.log(result)

  process.exit();
});