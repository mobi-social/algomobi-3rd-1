const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
const lower = (arr, target, start, end) => {
  let ans = -1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      ans = mid
      end = mid - 1
    }
  }
  return ans
}

const upper = (arr, target, start, end) => {
  let ans = -1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      ans = mid
      end = start + 1
    }
  }
  return ans
}

const solution = (input) => {
  const [N, A, M, B] = input
  A.sort((a, b) => a - b)
  let ans = []
  B.forEach((value) => {
    const lowerIdx = lower(A, value, 0, A.length - 1)
    const upperIdx = upper(A, value, 0, A.length - 1)
    let result = 0

    if (lowerIdx !== -1 && upperIdx !== -1) {
      result = upperIdx - lowerIdx + 1
    } else {
      result = 0
    }
    console.log(ans)
    ans.push(result)
    console.log(ans)
  })
  console.log(ans)
}

readline
  .on("line", function (line) {
    input.push(line.split(" ").map((el) => +el))
  })
  .on("close", function () {
    solution(input)
    process.exit()
  })
// https://jungeunpyun.tistory.com/73 ggg,,,,안풀림
