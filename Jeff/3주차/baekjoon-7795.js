// [이분탐색]
// 먹을 것인가 먹힐 것인가
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const T = input.shift()

  for (let i = 0; i < T; i++){
    const [n, m] = input.shift().split(" ").map(Number)
    const A = input.shift().split(" ").map(Number)
    const B = input.shift().split(" ").map(Number)
    B.sort((x, y) => x - y)
  
    let result = 0
    A.forEach((a) => {
      let left = 0
      let right = m - 1
      let mid = -1
      while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (a <= B[mid]) 
          right = mid-1
        else
          left = mid+1
      } 
      result+=left
    })
    console.log(result)
  }
  
  process.exit();
});