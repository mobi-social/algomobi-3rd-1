/* 🤖 알고리즘/자료구조: [dp, lcs] */
/* 📛 문제이름: LCS2 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [arr1, arr2] = input
  const arr1_len = arr1.length
  const arr2_len = arr2.length

  const dp = Array.from({ length: arr1_len + 1 }, () => new Array(arr2_len + 1).fill(''))
  for (let row = 1; row < arr1_len + 1; row++){
    const row_char = arr1[row - 1]
    for (let col = 1; col < arr2_len + 1; col++){
      const col_char = arr2[col - 1]
      if (row_char === col_char) {
        dp[row][col] = dp[row - 1][col - 1] + row_char
        }
      else {
        if (dp[row - 1][col].length < dp[row][col - 1].length) {
          dp[row][col] = dp[row][col - 1]
        } else {
          dp[row][col] = dp[row - 1][col]
        }
      }
    }
  }
  console.log(dp[arr1_len][arr2_len].length)
  console.log(dp[arr1_len][arr2_len])
  process.exit();
});