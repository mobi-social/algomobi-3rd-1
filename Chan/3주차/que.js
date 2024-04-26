class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Deque {
  constructor() {
    this.front = null
    this.rear = null
    this.count = 0
  }
  add(value) {
    const node = new Node(value)
    if (!this.front) {
      this.front = node
      this.rear = node
    } else {
      const cachedPrevFront = this.front
      cachedPrevFront.prev = node
      this.front = node

      node.next = cachedPrevFront
    }
    this.count += 1
    return this.count
  }
  delete() {
    if (this.count === 0) return null
  }
}
// https://velog.io/@young_pallete/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Deque-%EA%B5%AC%ED%98%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-JavaScript
