const { start } = require("repl")

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
    const [N, ArrN, M, ArrM] = input
    ArrN.sort((a, b) => a - b)
    let result = []
    let min = 0
    let max = ArrN.length1 - 1

    const lowerBound = (arr, target, min, max) => {
      while (min < max) {
        let mid = parseInt(min + max) / 2
        if (arr[mid] >= target) {
          max = mid
        } else {
          min = mid + 1
        }
      }
      return max
    }

    const upperBound = (arr, target, min, max) => {
      while (min < max) {
        let mid = parseInt(min + max) / 2
        if (arr[mid] > target) {
          max = mid
        } else {
          min = mid + 1
        }
      }
      return max
    }

    for (let i = 0; i < ArrM.length; i += 1) {
      //찾는 값의 개수 구하기
      const n =
        upperBound(ArrN, ArrM[i], min, max) -
        lowerBound(ArrN, ArrM[i], min, max)
      result.push(n)
    }

    console.log(result.join(" "))
    process.exit()
  })
 // https://jungeunpyun.tistory.com/73 후에다시,,,