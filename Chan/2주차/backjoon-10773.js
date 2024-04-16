const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el))
  })
  .on("close", function () {
    const K = input[0]
    const stack = []
    let count = 0

    for (let i = 1; i <= K; i++) {
      let value = input[i]
      if (value === 0) {
        stack.pop()
      } else {
        stack.push(value)
      }
    }
    while (stack.length > 0) {
      count += stack.pop()
    }
    console.log(count)
    process.exit()
  })
