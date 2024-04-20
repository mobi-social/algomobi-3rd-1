/** 비밀모임 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const getShortestIdx = (n,dist,visited) => {
  let shortest = 10000000000
  let shortestIdx = -1
  for (let i = 1; i < n; i++){
    if (!visited[i]&&dist[i]<shortest) {
      shortest = dist[i]
      shortestIdx = i
    } 
  }
  return shortestIdx
}

const dijkstra = (n,graph,start) => {
  const dist = Array.from({ length: n + 1 }).fill(10000000000)
  const visited = Array.from({length: n+1}).fill(false)
  
  dist[start] = 0
  visited[start] = true
  visited[0] = true
  
  graph[start].forEach(([end,cost]) => {
    dist[end] = cost
  })

  for (let i = 0; i < n + 1; i++){
    const now = getShortestIdx(n,dist,visited)
    if (now === -1) continue
    visited[now] = true
    graph[now].forEach(([end, cost])=> {
      if (dist[now] + cost < dist[end]) 
        dist[end] = dist[now]+ cost
    })
  }
  return dist
}

readline.on('line', function(line) {
  input.push(line.split(" ").map(Number));
}).on('close', function () {
  const [T] = input.shift()

  for (let _ = 0; _ < T; _++){
    const [n, m] = input.shift()
    const graph = Array.from({length: n+1}).map(()=>[])
    for (let i = 0; i < m; i++){
      const [start, end, cost] = input.shift()
      graph[start].push([end,cost])
      graph[end].push([start,cost])
    }
    const [memberNum] = input.shift()
    const startNodes = input.shift()

    // 한 사람인 경우
    if (memberNum === 1) {
      console.log(startNodes[0])
      continue
    }
    // (사람 2) + (방 2) 인 경우
    if (n === 2) {
      console.log(1)
      continue
    }
    
    const results = Array.from({ length: n + 1 }).fill(0)
    startNodes.forEach((startNode) => {
      const dist = dijkstra(n, graph, startNode)
      dist.forEach((cost,idx) => {
        results[idx] += cost
      })
    })
    console.log(results.findIndex((cost)=>cost===Math.min(...results)))
  }
  process.exit();
});