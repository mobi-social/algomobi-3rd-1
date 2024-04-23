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
    if (100 >= input[0] && input[0] >= 90) return console.log("A")
    if (89 >= input[0] && input[0] >= 80) return console.log("B")
    if (79 >= input[0] && input[0] >= 70) return console.log("C")
    if (69 >= input[0] && input[0] >= 60) return console.log("D")
    console.log("F")

    process.exit()
  })
