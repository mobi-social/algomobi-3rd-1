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
      const CheckStr = input[i]
      CheckStr.forEach((item) => {
        const CheckStrArr = item.split("")
        let count = 0
        CheckStrArr.map((str) => {
          console.log(str)
        })
      })
    }

    process.exit()
  })

//[ [ '3' ], [ '((' ], [ '))' ], [ '())(()' ] ]
