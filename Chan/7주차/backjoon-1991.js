const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

readline
  .on("line", function (line) {
    input.push(line)
  })
  .on("close", function () {
    const N = +input.shift()
    let result = ""

    const tree = {}
    for (let i = 0; i < N; i++) {
      // 각 줄을 node left right로 만들어준다.
      const [node, left, right] = input[i].split(" ")
      tree[node] = [left, right]
    }

    const preOrder = (node) => {
      if (node === ".") return
      const [left, right] = tree[node]
      result = result + node
      preOrder(left)
      preOrder(right)
    }

    const inOrder = (node) => {
      if (node === ".") return
      const [left, right] = tree[node]
      inOrder(left)
      result = result + node
      inOrder(right)
    }

    const postOrder = (node) => {
      if (node === ".") return
      const [left, right] = tree[node]
      postOrder(left)
      postOrder(right)
      result = result + node
    }

    preOrder("A")
    result += "\n"
    inOrder("A")
    result += "\n"
    postOrder("A")
    result += "\n"

    console.log(result)
    process.exit()
  })
