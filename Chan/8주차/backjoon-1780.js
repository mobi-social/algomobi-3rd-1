const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line.split(" ").map((el) => parseInt(el)))
  })
  .on("close", function () {
    const [N, ...Paper] = input
    const L = N[0]
    let Minus = 0
    let Zero = 0
    let Plus = 0
    const isSameValue = (x, y, Length) => {
      const value = Paper[x][y]
      for (let i = 0; i < Length; i++) {
        for (let j = 0; j < Length; j++) {
          if (value !== Paper[x + i][y + j]) return false
        }
      }
      return true
    }

    const makeSameColorParper = (x, y, Length) => {
      const value = Paper[x][y]
      const NextLength = Length / 3
      if (isSameValue(x, y, Length)) {
        if (value === -1) Minus++
        else if (value === 0) Zero++
        else if (value === 1) Plus++
        return
      }

      if (NextLength < 1) {
        if (value === -1) Minus++
        else if (value === 0) Zero++
        else if (value === 1) Plus++
        return
      }

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          makeSameColorParper(
            x + i * NextLength,
            y + j * NextLength,
            NextLength
          )
        }
      }
    }

    makeSameColorParper(0, 0, L)
    console.log(Minus)
    console.log(Zero)
    console.log(Plus)

    process.exit()
  })

/**
 * 
9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1
 */
