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
    const [SA, SB, _] = input
    KA = SA.shift()
    KB = SB.shift()
    const groupA = SA
    const K = KA
    const printTestCase = (K) => {
      const startIndex = K - 6
      const TestCase = groupA.slice(startIndex, startIndex + 6)
      if (K < 6) return // K 가 6보다 작으면 종료
      for (let i = startIndex; i >= startIndex; i--) {
        TestCase[0] = groupA[startIndex - 1]
        console.log(TestCase.join(" "))
      }
      printTestCase(K - 1)
    }
    printTestCase(K)

    process.exit()
  })
/**
 * 
7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0
 */
