/* 🤖 알고리즘/자료구조: [에라토스네의 체] */
/* 📛 문제이름: 골드바흐의 추측 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(parseInt(line))
}).on('close', function () {
  const T = input.shift()
  
  const upper = Math.max(...input)
  const isPrime = Array.from({ length: upper }).fill(true)
  const sqrt = Math.ceil(Math.sqrt(upper, 2))
  isPrime[1] = false
  for (let i = 2; i <= sqrt; i++){
    if (!isPrime[i]) continue
    for (let j = i * 2; j <= upper; j += i){
      isPrime[j] = false
    }
  }
  
  for (let t = 0; t < T; t++){
    const cur = input.shift()
    let half_small = Math.floor(cur / 2)
    let half_big = cur - half_small
    while (!isPrime[half_small] || !isPrime[half_big]) {
      half_small -= 1
      half_big = cur- half_small
    }
    console.log(half_small,half_big)
  }

  process.exit();
});