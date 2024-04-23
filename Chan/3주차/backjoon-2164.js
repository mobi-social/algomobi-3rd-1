const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = 0

readline
  .on("line", function (line) {
    input = parseInt(line)
  })
  .on("close", function () {
    class Node {
      constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
      }
    }
    class LinkedList {
      constructor() {
        this.head = null
        this.tail = null
        this.length = 0
      }
      add(value) {
        const node = new Node(value)
        if (this.head) {
          this.tail.next = node
          node.prev = this.tail
        } else {
          this.head = node
        }
        this.tail = node
        this.length++
        return node
      }
      remove() {
        this.head = this.head.next
        this.head.prev = null
        this.length--
      }
      getHead() {
        return this.head.value
      }
    }
    const solution = (num) => {
      const cards = new LinkedList()
      for (let i = 1; i <= num; i++) {
        cards.add(i)
      }

      while (cards.length > 1) {
        cards.remove()
        cards.add(cards.getHead())
        cards.remove()
      }
      return cards.getHead()
    }
    const card = solution(input)
    console.log(card)
    process.exit()
  })
