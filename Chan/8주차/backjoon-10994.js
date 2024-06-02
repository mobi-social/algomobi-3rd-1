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
    const array = create2DArray(N)
    makeStarBox(N, array)
    process.exit()
  })

const makeStarBox = (num, arr2D) => {
  let Length = getLenth(num)
  let nextNum = num - 4

  for (let i = 0; i < Length; i++) {
    for (let j = 0; j < Length; j++) {}
  }
  
}

const create2DArray = (num) => {
  const Length = getLenth(num)
  const array = new Array(num)
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size).fill("")
  }
  return array
}

const getCenterPoint = (num) => {
  let Length = getLenth(num)
  return Math.floor(Length / 2)
}

const getLenth = (num) => {
  return 1 + (num - 1) * 2
}
