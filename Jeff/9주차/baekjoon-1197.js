/* 🤖 알고리즘/자료구조: [최소신장트리, 크루스칼 알고리즘] */
/* 📛 문제이름: 최소 스패닝 트리 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const findParent = (a, parent) => {
  if (a !== parent[a]) a = findParent(parent[a], parent)
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
  input.push(line.split(" ").map(Number))
}).on('close', () => {
  const [V, E] = input.shift()
  input.sort((elem1, elem2) => elem1[2] - elem2[2])
  let parent = new Array(V + 1).fill(0).map((_, idx) => idx)
  let answer = 0
  for (let i = 0; i < E; i++){
    const [s, e, c] = input[i]
    if (findParent(s, parent) !== findParent(e, parent)){
      parent = union(s, e, parent)
      answer += c
    }
  }
  console.log(answer)
  process.exit();
});