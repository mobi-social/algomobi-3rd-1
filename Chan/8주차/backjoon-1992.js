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
    const [N, ...square] = input
    const Box = square.map((row) => row.split("").map(Number))
    const result = []

    const QuardTree = (x, y, Size) => {
      const BasePoint = Box[x][y]

      if (isAllSame(x, y, Size, Box)) {
        result.push(BasePoint)
        return
      }

      result.push("(")
      let half = Size / 2
      QuardTree(x, y, half)
      QuardTree(x, y + half, half)
      QuardTree(x + half, y, half)
      QuardTree(x + half, y + half, half)
      result.push(")")
    }

    QuardTree(0, 0, N)
    console.log(result.join(""))
    process.exit()
  })

const isAllSame = (x, y, size, arr2D) => {
  const base = arr2D[x][y]
  for (let i = x; i < size + x; i++) {
    for (let j = y; j < size + y; j++) {
      if (base !== arr2D[i][j]) return false
    }
  }
  return true
}
