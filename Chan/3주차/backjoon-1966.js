const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line)
  })
  .on("close", function () {
    const Input = input.map((el) => el.split(" ").map((st) => +st))
    const TestCase = Input[0][0]
    for (let i = 0; i < TestCase; i++) {
      let [N, M] = Input[i * 2 + 1]
      let que = Input[i * 2 + 2]
      let count = 0
      while (true) {
        const head = que.shift()
        if (que.every((el) => el <= head)) {
          count++
          if (M === 0) {
            console.log(count)
            break
          } else {
            M--
          }
        } else {
          que.push(head)
          if (M === 0) {
            M = que.length - 1
          } else {
            M--
          }
        }
      }
    }
    process.exit()
  })
