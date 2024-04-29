const { createBrotliCompress } = require("zlib")

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
    ArrN.sort((a, b) => a - b) // 탐색할 대상을 정렬
    ArrM.forEach((num) => {
      // 배열의 원소를 순회하며 탐색대상과 같은 숫자가 존재하는지 탐색
      let start = 0 // 시작 인덱스
      let end = ArrN.length - 1 // 끝번호
      let result = false
      while (start <= end) {
        // 시작번호가 끝보다 커지면 탐색종료 & false반환
        let mid = Math.floor((start + end) / 2) // 중간값부터 확인
        if (num < ArrN[mid]) {
          end = mid - 1 // 인덱스 감소
        } else if (num > ArrN[mid]) {
          start = mid + 1 // 인덱스 증가
        } else {
          result = true
          break
        }
      }
      if (result) return console.log(1)
      console.log(0)
    })
    process.exit()
  })
