/* 🤖 알고리즘/자료구조: [최소신장트리, 크루스칼 알고리즘] */
/* 📛 문제이름: 나만 안되는 연애 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findParent = (a, parent) => {
  if (parent[a] !== a) a = findParent(parent[a], parent)
  return a
}
const union = (a, b, parent) => {
  const _parent = [...parent]
  a = findParent(a, _parent)
  b = findParent(b, _parent)
  if (b > a) _parent[b] = a
  else _parent[a] = b
  return _parent
}
let input = [];
readline.on('line', function(line) {
  input.push(line.split(" "))
}).on('close', function () {
  const [N, M] = input.shift().map(Number)
  const genders = input.shift()
  genders.unshift("None")
  let parent = new Array(N + 1).fill(0).map((_, idx) => idx)
  const graph = input.map((elem)=>elem.map(Number))
  graph.sort((a, b) => a[2] - b[2])
  let result = 0
  let lines = 0
  graph.forEach(([s,e,c]) => {
    if (genders[s] !== genders[e] && findParent(s,parent) !== findParent(e,parent)) {
      parent = union(s, e, parent)
      lines += 1;
      result += c
    }
  })
  if(lines === N-1) console.log(result)
  else console.log(-1)
  process.exit();
});