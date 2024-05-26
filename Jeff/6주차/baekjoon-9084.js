
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = []

readline.on('line', function(line) {
  input.push(line.split(" ").map(Number))
}).on('close', function () {
  const _input = [...input]
  const [T] = _input.shift(); 

  for (let t = 0; t < T; t++){
    const [n] = _input.shift();
    const coins = _input.shift();
    const [k] = _input.shift();
    
    const dp = Array.from({ length: k + 1 }, () => 0)
    dp[0] = 1
    coins.forEach((coin) => {
      for (let i = 0; i < k + 1; i++){
        if(i>=coin) dp[i] += dp[i-coin]
      }
    })
    console.log(dp)
  }
  process.exit();
});