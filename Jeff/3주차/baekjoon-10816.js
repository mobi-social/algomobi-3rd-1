const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];


readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = parseInt(input.shift())
  const cards = input.shift().split(" ").map(Number)
  const m = parseInt(input.shift())
  const has = input.shift().split(" ").map(Number)

  const counts = {}
  cards.sort((a, b) => a - b)
  cards.forEach((elem) => {
    if (elem in counts) counts[elem] += 1
    else counts[elem] = 1
  })

  const result = [];
  has.forEach((elem) => {
    let flag = false
    
    let left = 0
    let right = n-1

    while (left <= right) {
      let mid = parseInt((left + right) / 2)
      
      if (cards[mid] === elem) {
        flag = true
        break
      }
      else if (cards[mid] < elem)
        left = mid+1
      else if (cards[mid] > elem)
        right = mid-1
    }
    if (flag) result.push(counts[elem])
    else result.push(0)
  })

  console.log(result.join(" "))
  process.exit();
});