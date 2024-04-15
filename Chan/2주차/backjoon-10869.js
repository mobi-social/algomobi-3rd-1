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
    const Plus = input[0] + input[1]
    const Minus = input[0] - input[1]
    const Multi = input[0] * input[1]
    const Divide = Math.floor(input[0] / input[1])
    const xx = input[0] % input[1]
    console.log(Plus)
    console.log(Minus)
    console.log(Multi)
    console.log(Divide)
    console.log(xx)
    process.exit()
  })
