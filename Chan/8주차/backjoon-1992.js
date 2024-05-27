const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line.split(" "))
  })
  .on("close", function () {
    const [N, ...square] = input
    square.map((arr) => arr.map((el) => el.split("")).map((el) => +el))
    console.log(N, square)
    process.exit()
  })

/**
 * 
8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011
 */
