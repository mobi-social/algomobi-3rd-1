const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getGCD = (n, m) => {
  if(m===0) return n
  return getGCD(m, n % m);
}
const input = []
readline.on('line', function(line) {
  input.push(line)
}).on('close', () => {
  const [T] = input.shift()
  for (let i = 0; i < T; i++){
    const arr = input[i].split(" ").map(Number)
    const arrLength = arr.shift()
    arr.sort((a, b) => a - b)
    let result = 0;
    for (let i = 0; i < arrLength - 1; i++) {
      for (let j = i + 1; j < arrLength; j++) {
        result += getGCD(arr[i], arr[j])
      }
    }
    console.log(result)
  }
  process.exit();
});
