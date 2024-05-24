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

    process.exit()
  })

const getFullSize = (length) => {
  return length
}
const getEmptySize = (length) => {
  return length / 3
} 
const getStar = (length) => {
  let result = ""
  const startPoint = getEmptySize(length)
  let countY = 0
  for (let i = 0; i < length; i++) {
    let countX = 0
    for (let j = 0; j < length; j++) {
      if(countX === startPoint)
      countX++
    }
  }

  return result
}

const getStarBox = (length) => {}
