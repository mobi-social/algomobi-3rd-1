// [dijkstra, heap]
// 파티
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

class Heap {
  constructor() {
    this.heap = []  
  }
  isEmpty = () => {
    return !!!this.getHeapSize()
  }
  getHeapSize = () => {
    return this.heap.length
  }
  bubbleUp = (cur) => {
    const parent = Math.floor((cur - 1) / 2)
    if (0 <= parent && this.heap[cur][0] < this.heap[parent][0]) {
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]]
      this.bubbleUp(parent)
    }
  }
  bubbleDown = (cur) => {
    const left = cur * 2 + 1
    const right = cur * 2 + 2
    let target = cur;
    if (left < this.getHeapSize() && this.heap[left][0] < this.heap[target][0]) 
      target = left
    if (right < this.getHeapSize() && this.heap[right][0] < this.heap[target][0]) 
      target = right
    if (cur !== target) {
      [this.heap[target], this.heap[cur]] = [this.heap[cur], this.heap[target]]
      this.bubbleDown(target)
    }
  }
  heapPush = (val) => {
    this.heap.push(val)
    this.bubbleUp(this.getHeapSize()-1)
  }
  heapPop = () => {
    if (this.isEmpty()) 
      return [-1,-1]
    const result = this.heap[0]
    this.heap[0] = this.heap.at(-1)
    this.heap.pop()
    this.bubbleDown(0)
    return result
  }
}

const dijkstra = (n, graph, start) => {
  const dist = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
  dist[start] = 0
  
  const heap = new Heap()
  heap.heapPush([0,start])

  while (!heap.isEmpty()) {
    const [curCost, curNode] = heap.heapPop()
    graph[curNode].forEach(([nxtCost, nxtNode]) => {
      if (curCost + nxtCost < dist[nxtNode]) {
        dist[nxtNode] = curCost + nxtCost
        heap.heapPush([curCost + nxtCost, nxtNode])
      }
    })
  }
  return dist
}

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [N, M, X] = input.shift().split(" ").map(Number)
  const graph = Array.from({ length: N + 1 }).map(() => ([]))
  
  for (let i = 0; i < M; i++){
    const [start, end, cost] = input.shift().split(" ").map(Number)
    graph[start].push([cost, end])
  }
  const come = dijkstra(N, graph, X)
  const res = Array.from({ length: N + 1 }).map(()=>0)
  for (let i = 1; i < N+1; i++){
    const go = dijkstra(N,graph,i)
    res[i] = come[i] + go[X]
  }

  console.log(Math.max(...res))
  process.exit();
});