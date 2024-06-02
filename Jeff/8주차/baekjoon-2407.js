/* 🤖 알고리즘/자료구조: [구현] */
/* 📛 문제이름: 조합 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline.on('line', function(line) {
  input.push(line)
}).on('close', () => {
  const [n, r] = input[0].split(' ').map(Number)
  const dp = Array.from({length: n+1},()=>new Array(n+1).fill(0n))
  for (let i = 1; i < n+1; i++){
    for(let j = 0; j< i+1; j++){
      if(j == 0 || i == j)
        dp[i][j] = 1n;
      else
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
    }
  }
  console.log((dp[n][r]).toString())
  process.exit();
});