/** 보물섬 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', ()=>{
  
  const [h,w] = input.shift().split(' ').map(el => parseInt(el))
  const graph = input.map((row) => row.split(''))
  const resultMap = Array.from({ length: h }).map(() => new Array(w).fill(-1))
  
  const dx = [1, -1, 0, 0]
  const dy = [0, 0, -1, 1]

  const initResultMap = () => {
    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        resultMap[row][col] = -1;
       }
    }
  }

  const bfs = ({ x, y }) => {
    const que = []
    resultMap[x][y] = 0
    let result = 0
  
    que.push({ nx: x, ny: y})
    while (que.length!==0) {
      const { nx, ny } = que.shift()
      for (let i = 0; i < 4; i++){
        const nextX = nx + dx[i]
        const nextY = ny + dy[i]
        if (nextX < 0) continue
        if (nextX > h-1) continue
        if (nextY < 0) continue
        if (nextY > w-1) continue
        if (graph[nextX][nextY] === 'W') continue
        if (resultMap[nextX][nextY] !== -1) continue
        que.push({ nx: nextX, ny: nextY })
        resultMap[nextX][nextY] = resultMap[nx][ny] + 1
        result = Math.max(resultMap[nextX][nextY],result)
      }
    }
    return result
  }
  let maxLength = 0
  for (let row = 0; row < h; row++){
    for (let col = 0; col < w; col++){
      if(graph[row][col] ==='W') continue
      if (graph[row][col] === 'L' && resultMap[row][col] === -1) 
        maxLength = Math.max(bfs({ x: row, y: col }),maxLength)
        initResultMap()
    }
  }
  console.log(maxLength)
  process.exit();
});