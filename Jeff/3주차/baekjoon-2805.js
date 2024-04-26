const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [N, M] = input.shift().split(" ").map(Number)
  const trees = input.shift().split(" ").map(Number)
  trees.sort((a, b) => a - b)
  
  let left = 0; // 절단기 최소 높이
  let mid = 0 // 자를 높이
  let right = 2000000001 // 절단기 최대 높이

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    /* 모든 나무에서 베어진 길이 */
    const cuttingAll = trees.reduce((sum, num) => { 
      const cuttingOne = (num - mid)
      if(cuttingOne > 0) return sum + (cuttingOne)
      return sum
    }, 0)
    if (cuttingAll >= M) left = mid + 1
    else right = mid - 1
  }

  console.log(right)
  process.exit();
});