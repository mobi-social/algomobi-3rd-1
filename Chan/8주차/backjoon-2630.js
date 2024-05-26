const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line.split(" ").map((el) => +el))
  })
  .on("close", function () {
    const [N, ...paper] = input
    let countBlue = 0
    let countWhite = 0
    const isSameColor = (x, y, length) => {
      let baseColor = paper[x][y]
      for (let i = x; i < x + length; i++) {
        for (let j = y; j < y + length; j++) {
          if (baseColor !== paper[i][j]) return false
        }
      }
      return true
    }
    const makeSameColoredSquare = (x, y, length) => {
      if (isSameColor(x, y, length)) {
        if (paper[x][y] === 1) countBlue++
        else countWhite++
        return
      }
      let halfLength = length / 2
      makeSameColoredSquare(x, y, halfLength)
      makeSameColoredSquare(x, y + halfLength, halfLength)
      makeSameColoredSquare(x + halfLength, y, halfLength)
      makeSameColoredSquare(x + halfLength, y + halfLength, halfLength)
    }
    makeSameColoredSquare(0, 0, N)
    console.log(countWhite)
    console.log(countBlue)
    process.exit()
  })
