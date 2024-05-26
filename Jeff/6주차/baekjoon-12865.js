/* 🤖 알고리즘/자료구조: [k-napsack] */
/* 📛 문제이름: 평범한 배낭 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.split(" ").map(Number))
}).on('close', function () {
  
  const items = [...input]
  const [n,k] = items[0]
   
  const dp = Array.from({ length: n + 1 }, () =>Array(k + 1).fill(0))
  
  for (let i = 1; i < n + 1; i++){
    const [w,v] = items[i] 
    for (let j = 1; j < k + 1; j++){
      if (w <= j) dp[i][j] = Math.max(dp[i-1][j-w] + v, dp[i-1][j]);
      else dp[i][j] = dp[i-1][j]
    }
  }
  console.log(dp[n][k])
  process.exit();
});