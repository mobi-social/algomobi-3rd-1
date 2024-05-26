const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(" ").map(Number)
}).on('close', function () {
  const [a, b] = input
  const isPrimes = new Array(b + 1).fill(true)
  const bSqrt = Math.ceil(Math.sqrt(b))
  isPrimes[0] = false
  isPrimes[1] = false
  for (let i = 2; i < bSqrt+1; i++) {
    if (!isPrimes[i]) continue;
    if (i * i > b) break;
    for (let j = i; j < b; j++)
      isPrimes[i*j] = false
  }
  let res = 0
  for (let i = 2; i <= bSqrt; i++){
    if (!isPrimes[i]) continue
    let guii = i*i
    while (true) {
      if (guii < a) {
        guii *= i;
        continue;
      }
      if (guii > b) break
      res += 1;
      guii *= i;
    }
  }
  console.log(res)
});