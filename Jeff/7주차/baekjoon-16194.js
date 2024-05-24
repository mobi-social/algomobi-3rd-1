/* 🤖 알고리즘/자료구조: [dp] */
/* 📛 문제이름: 카드 구매하기 2 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = parseInt(input.shift());
  
  const P = input[0].split(" ").map(Number)
  P.unshift(0)

  const dp = Array.from({ length: n + 1 }, () => 0)
  
  for (let i = 1; i < n + 1; i++){
    for (let j = 1; j < i+1; j++){
      if (dp[i] === 0) {
        dp[i] = dp[i - j] + P[j]
      }
      else dp[i] = Math.min(dp[i - j] + P[j], dp[i])
    }
  }
  
  console.log(dp.at(-1))
  process.exit();
});