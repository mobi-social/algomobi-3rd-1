/* 🤖 알고리즘/자료구조: [dp, lcs] */
/* 📛 문제이름: LCS */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [str1,str2] = input;
  const arr1 = str1.split("")
  const arr2 = str2.split("")
  
  const len1 = arr1.length
  const len2 = arr2.length

  const graph = Array.from({ length: len1+1 }, () => new Array(len2+1).fill(0))
  
  for (let row = 1; row < len1+1; row++){
    const rowChar = arr1[row-1]
    for (let col = 1; col < len2+1; col++){
      const colChar = arr2[col - 1]
      if (rowChar === colChar) graph[row][col] = graph[row-1][col-1] + 1
      else graph[row][col] = Math.max(graph[row-1][col] , graph[row][col-1])
    }
  }
  console.log(graph[len1][len2])
  process.exit();
});