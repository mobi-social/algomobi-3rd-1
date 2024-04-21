const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line.split("\n"))
  })
  .on("close", function () {
    const Cycle = +input[0]
    for (let i = 1; i <= Cycle; i++) {
      let count = 0
      let result = "NO"
      let Target = input[i]
      let TargetArr = Target[0].split("")
      TargetArr.map((str) => {
        if (count < 0) return
        if (str === "(") {
          count = count + 1
        } else {
          count = count - 1
        }
      })
      if (count === 0) result = "YES"
      console.log(result)
    }
    process.exit()
  })
