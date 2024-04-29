const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const N = parseInt(input.shift())
  const arr = input.shift().split(" ").map(Number)
  
  // 용액을 정렬한다.
  // 용액을 순차적으로 방문한다.
  // 현재 용액의 *(-1) 한 값과 가장 가까운 걸 찾는다.
  // 배열에 누적한다.
  // 배열에서 가장 작은 값을 찾는다.

  arr.sort((a, b) => a - b)


  const binarySearch = (curIdx) => {
    const target = arr[curIdx] * (-1)
    
    let leftIdx = 0;
    let rightIdx = N - 1;
    let res = 0
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2)
      if (arr[midIdx] < target) {
        res = midIdx
        leftIdx = midIdx + 1;
      }
      else {
        rightIdx = midIdx - 1;
      }
    }
    return [res, arr[curIdx],arr[res]]
  }

  const result = []
  arr.forEach((_,idx) => {
    result.push(binarySearch(idx))
  })

  result.sort((a, b) => {
    return b[0] - a[0]
  })

  console.log(result[0])
  
  
  process.exit();
});