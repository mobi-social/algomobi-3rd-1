/** 최소 힙 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
class Heap{
  constructor() {
    this.heap = []
  }
  getLength = () => {
    return this.heap.length
  }
  isEmpty = () => {
   return !!!this.getLength()
  }
  heapifyUp = (curIndex) => {
    const parentIndex = Math.floor((curIndex - 1) / 2)
    if (0<=parentIndex && this.heap[curIndex] < this.heap[parentIndex]) {
      [this.heap[parentIndex], this.heap[curIndex]] = [this.heap[curIndex], this.heap[parentIndex]]
      this.heapifyUp(parentIndex)
    }
  }
  heapifyDown = (curIndex) => {
    const heapLength = this.getLength()
    const leftChildIndex = curIndex * 2 + 1
    const rightChildIndex = curIndex * 2 + 2
    let smallestIndex = curIndex
    if (leftChildIndex < heapLength && this.heap[leftChildIndex]<this.heap[smallestIndex]) 
      smallestIndex = leftChildIndex
    if (rightChildIndex < heapLength && this.heap[rightChildIndex] < this.heap[smallestIndex])
      smallestIndex = rightChildIndex
    if (smallestIndex !== curIndex)
    {
      [this.heap[smallestIndex], this.heap[curIndex]] = [this.heap[curIndex], this.heap[smallestIndex]]  
      this.heapifyDown(smallestIndex)
    }
  }
  heapPush = (value) => {
    this.heap.push(value)
    this.heapifyUp(this.getLength() - 1)
  }
  heapPop = () => {
    if (this.isEmpty()) return null;
    const result = this.heap[0]
    this.heap[0] = this.heap.at(-1)
    this.heap.pop()
    this.heapifyDown(0)
    return result
  }
}
readline.on('line', function(line) {
  input.push(parseInt(line))
}).on('close', function () {
  const n = input.shift()
  const minHeap = new Heap()
  const result = []
  input.forEach(elem => {
    if (elem === 0) {
      if (minHeap.isEmpty()) result.push(0)
      else result.push(minHeap.heapPop())
    }
    else {
      minHeap.heapPush(elem)
    }
  })
  console.log(result.join('\n'))
  process.exit();
});