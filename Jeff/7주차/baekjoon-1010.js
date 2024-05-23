const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dp = Array.from({length: 30},()=>new Array(30).fill(0))

const combination = (n, r) => {
  if(dp[n][r]!=0) return dp[n][r] 
  if (n == r || r == 0) {
    dp[n][r] = 1
    return 1
  }
  dp[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
  return dp[n][r];
} 

readline.on('line', function(line) {
  input.push(line.split(" ").map(Number))
}).on('close', function () {  
  const T = input[0][0];
  const answers = []
  for (let i = 1; i < T + 1; i++){
    const [r, n] = input[i]
    answers.push(combination(n,r))
  }  
  console.log(answers.join("\n"))
  process.exit();
});