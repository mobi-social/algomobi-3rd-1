/* 🤖 알고리즘/자료구조: [dijkstra, heap] */
/* 📛 문제이름: 비밀모임 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
class Heap{
  constructor(){
    this.heap = []
  }
  isEmpty = () => !!!this.getHeapSize()
  getHeapSize = () => this.heap.length
  bubbleUp = (curIdx) => {
    const parentIdx = Math.floor((curIdx - 1) / 2)
    if (0 <= parentIdx && this.heap[curIdx][0] < this.heap[parentIdx][0] ) { 
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
      this.bubbleUp(parentIdx)
    }
  }
  bubbleDown = (curIdx) => {
    const leftIdx = curIdx * 2 + 1
    const rightIdx = curIdx * 2 + 2
    let smallestIdx = curIdx 
    if (leftIdx < this.getHeapSize() && this.heap[leftIdx][0] < this.heap[smallestIdx][0] )
      smallestIdx = leftIdx
    if (rightIdx < this.getHeapSize() &&  this.heap[rightIdx][0] < this.heap[smallestIdx][0] ) 
      smallestIdx = rightIdx
    if (smallestIdx !== curIdx) {
      [this.heap[smallestIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[smallestIdx]]
      this.bubbleDown(smallestIdx)
    }
  }
  heapPush = (newPair) => {
    this.heap.push(newPair)
    this.bubbleUp(this.getHeapSize()-1)
  }
  heapPop = () => {
    if (this.isEmpty()) {
      return [-1, -1]
    }
    const returnVal = this.heap[0]
    this.heap[0] = this.heap.at(-1)
    this.heap.pop()
    this.bubbleDown(0)
    return returnVal
  }
}

// dijkstra
const dijkstra = (graph, n, start) => {
  const distance = Array.from({ length: n + 1 }).fill(Number.MAX_SAFE_INTEGER)
  const heap = new Heap()
  distance[start] = 0
  heap.heapPush([0, start])
  while (!heap.isEmpty()) {
    const [curCost, curNode] = heap.heapPop()
    if(curCost==-1 && curNode ==-1) break
    graph[curNode].forEach(([nxtCost, nxtNode]) => {
      if (curCost + nxtCost < distance[nxtNode]) {
        distance[nxtNode] = curCost + nxtCost
        heap.heapPush([curCost + nxtCost, nxtNode])
      }
    })
  }
  return distance
}

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const T = parseInt(input.shift())
  for (let i = 0; i < T; i++){
    const [N, M] = input.shift().split(" ").map(Number)
    const graph = Array.from({ length: N + 1 }).map(() => ([]))
    for (let j = 0; j < M; j++){
      const [start, end, cost] = input.shift().split(" ").map(Number)
      graph[start].push([cost, end])
      graph[end].push([cost,start])
    }
    const K = parseInt(input.shift())
    const curPos = input.shift().split(" ").map(Number)
    const res = Array.from({ length: N + 1 }).fill(0)
    for (let j = 0; j < K; j++){
      const subRes = dijkstra(graph, N, curPos[j])
      for (let k = 0; k < subRes.length; k++)
        res[k] += subRes[k]
    }
    console.log(res.findIndex((di)=>di === Math.min(...res)))
  }

  process.exit();
});