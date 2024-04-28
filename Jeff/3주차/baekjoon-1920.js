const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const binarySearching = (A, N, findNumber) => {


}

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){

  const N = input.shift()
  const A = input.shift().split(" ").map(Number)
  const M = input.shift()
  const B = input.shift().split(" ").map(Number)

  A.sort((a, b) => a - b)

  const result = []

  B.map((elem) => {
    let flag = false
    let left = 0
    let right = N - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (A[mid] === elem) {
        flag = true
        break
      }
      if (A[mid] < elem) 
        left = mid + 1
      
      if (A[mid] > elem) 
        right = mid - 1
    }
    if(flag) result.push(1)
    else result.push(0)
  })

  console.log(result.join("\n"))
  
  process.exit();
});