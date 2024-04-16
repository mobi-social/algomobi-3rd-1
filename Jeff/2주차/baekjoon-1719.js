const { constants } = require('buffer');
const { start } = require('repl');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const findShortestIdx = (n,dist,visited) => {
  let shortestCost = 100000000;
  let shortestIdx = -1
  for (let i = 1; i < n+1; i++){
    if (!visited[i] && dist[i] < shortestCost) {
      shortestCost = dist[i] 
      shortestIdx = i 
    }
  }
  return shortestIdx
}

const findParent = (startNode, parent, now) => {
  if(parent[now] === -1) return -1
  if (parent[now] !== now) return findParent(startNode, parent, parent[now])
  return now
 
}

const dijkstra = (n, graph, startNode) => {
  const visited = Array.from({length:n+1}).fill(false)
  const dist = Array.from({ length: n + 1 }).fill(100000000)
  const parent = Array.from({ length: n + 1 }).fill(-1)
  
  dist[startNode] = 0 
  visited[startNode] = true
  visited[0] = true
  parent[startNode] = startNode 
  graph[startNode].forEach((elem) => {
    const [end, cost] = elem
    dist[end] = cost
    parent[end] = end
  })
  
  for (let i = 1; i < n + 1; i++){
    const now = findShortestIdx(n, dist, visited)
    if (now === -1) continue
    visited[now] = true
    graph[now].forEach((elem) => {
      const [end, cost] = elem
      if (dist[now] + cost < dist[end]) {
        dist[end] = dist[now] + cost
        parent[end] = findParent(startNode, parent, now)
      }
    })
  }
  
  parent[startNode] = '-'
  parent.shift()
  return parent
}

readline.on('line', function(line) {
  input.push(line.split(" ").map(Number))
}).on('close', function () {
  
  const [n, m] = input.shift()
  const graph = Array.from({ length: n+1 }).map(() => [])

  for (let i = 0; i < m; i++){
    const [start, end, cost] = input[i]
    graph[start].push([end,cost])
    graph[end].push([start, cost])
  }

  let result =''
  for (let startNode = 1; startNode < n + 1; startNode++){
    result += dijkstra(n, [...graph], startNode).join(" ")
    result += '\n'
  }
  console.log(result)
  process.exit();
});