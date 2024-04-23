const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input = line.split("")
  })
  .on("close", function () {
    let stack = []
    let canSplit = true
    while (canSplit) {
      let Right = input.indexOf("<")
      let empty = input.indexOf("")
      let Left = input.indexOf(">")
      let index = Math.max(Right, empty, Left)
      if (index !== -1) {
        stack.push(input.splice(index + 1, input.length))
        stack.push(input.splice(index, index))
      } else {
        stack.push(input)
        canSplit = false
      }
    }
    console.log(stack)
    process.exit()
  })
