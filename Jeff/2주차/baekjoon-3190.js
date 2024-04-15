/** 파티 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  const [n, m, x] = input.shift()
  const distance = new Array(n+1).fill(10000000)
  const visited = new Array(n+1).fill(false)
  const graph = Array.from({ length: n + 1 }).map(() => [])

  // distance 초기화
  const initDistance = () => {
    for (let i = 0; i < n+1; i++)
      distance[i] = 10000000
  }
  // visited 초기화
  const initVisited = () => {
    visited[0] = true
    for (let i = 0; i < n + 1; i++) 
      visited[i] = false
  }
  // graph 초기화
  const initGraph = () => {
    for (let i = 0; i < n + 1; i++)
      for (let j = 0; j < graph[i].length; j++)
        graph[i].pop()
  }
  // 가는 길 그래프 그리기
  const getGoGraph = () => {
    for (let i = 0; i < m; i++){
      const [start, end, cost] = input[i]
      graph[start].push({end,cost})
    }
  }
  // 오는 길 그래프 그리기
  const getComeGraph = () => {
    for (let i = 0; i < m; i++){
      const [start, end, cost] = input[i]
      graph[end].push({end:start,cost})
    }
  }
  
  const getShortestIndex = () => {
    let minCost = 1000000000
    let shortestIndex = -1
    for (let i = 1; i < n+1; i++){
      if (!visited[i] && distance[i] < minCost) {
        minCost = distance[i]
        shortestIndex = i
      }
    }
    return shortestIndex
  }

  const dijkstra = (start) => {
    visited[start] = true
    distance[start] = 0
    
    graph[start].forEach((direct) => {
      const { end, cost } = direct
      distance[end] = cost
    })

    for (let _ = 0; _ < n + 1; _++) {
      const now = getShortestIndex()
      if (now === -1) continue
      visited[now] = true
      graph[now].forEach((direct) => {
        const { end, cost } = direct
        if (cost + distance[now] < distance[end])
          distance[end] = cost + distance[now]
      })
    }
  }

  // 가는 길
  getGoGraph()
  dijkstra(x)
  const goCosts = [...distance]
  
  initGraph()
  initDistance()
  initVisited()

  // 오늘 길
  getComeGraph()
  dijkstra(x)
  const comeCosts = [...distance]

  let maxCost = -1
  for (let i = 1; i < n + 1; i++)
    maxCost = Math.max(maxCost, goCosts[i]+comeCosts[i])
  console.log(maxCost)
  process.exit();
});