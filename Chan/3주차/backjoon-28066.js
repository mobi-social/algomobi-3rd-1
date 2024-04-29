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
    let que = Array.from({ length: input[0] }, (_, idx) => idx + 1)
    let K = input[1]
    let firstSq = que[0]
    while (true) {
      if (que.length <= K) {
        console.log(firstSq)
        break
      } else {
        que.push(que.shift())
        for (let i = 0; i < K - 1; i++) {
          que.shift()
        }
        firstSq = que[0]
      }
      if (que.length === 1) {
        console.log(firstSq)
        break
      }
    }
    process.exit()
  })
