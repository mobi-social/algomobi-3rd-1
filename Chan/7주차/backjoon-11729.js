const { join } = require("path")

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(+line)
  })
  .on("close", function () {
    const [N] = input
    let count = 0
    let answer = []
    const record = (from, to) => {
      answer.push([from, to])
      count++
    }

    function Hanoi(num, from, other, to) {
      if (num === 0) {
        return
      } else {
        Hanoi(num - 1, from, to, other)

        record(from, to)

        Hanoi(num - 1, other, from, to)
      }
    }

    Hanoi(N, 1, 2, 3)

    console.log(count)

    console.log(answer.map((element) => element.join(" ")).join("\n"))
    process.exit()
  })
