const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const isPrime = (number) => {
  if (number === 1) return false
  for (let i = 2; i * i < number; i++){
    if(number % i === 0) return false
  }
  return true
}
const change = (number) => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  if (number === 2) return 2;
  if (number === 3) return -1;
  if (number === 4) return -1;
  if (number === 5) return 5;
  if (number === 6) return 9;
  if (number === 7) return -1;
  if (number === 8) return 8;
  if (number === 9) return 6;
    
}
const reverse = (number) => {
  const array_split = number.toString().split("")
  const reverse_array = array_split.reverse()
  const turn_each = []
  for (let i = 0; i < reverse_array.length; i++) {
    const turn = change(parseInt(reverse_array[i]))
    if (turn === -1) return -1
    turn_each.push(turn)
  }
  const result = parseInt(turn_each.join(""))
  return result
}

const solution = (number) => {
  if (!isPrime(number)) return "no"
  const reverse_number = reverse(number)
  if (reverse_number === -1) return "no"
  if(!isPrime(reverse_number)) return "no"
  return "yes"
}

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const target = parseInt(input.shift())
  console.log(solution(target))
  process.exit();
});