const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  const sqrt = Math.ceil(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
const input = []
readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const N = parseInt(input[0])
  const arr = [... new Set(input[1].split(" ").map(Number))]
  let result = 1
  
  arr.forEach((num) => {
    if (isPrime(num)) 
      result *= num
  })
  if (result === 1) console.log(-1)
  else console.log(result)

  process.exit();
});