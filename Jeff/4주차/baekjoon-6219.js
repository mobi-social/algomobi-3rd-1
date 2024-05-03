/* 🤖 알고리즘/자료구조: [에라토스네의 체] */
/* 📛 문제이름: 소수의 자격 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const isIn = (target, find) => {
  const targetString = target.toString()
  const findString = find.toString()
  if (targetString.includes(findString)) return true
  return false
}

readline.on('line', function(line) {
  input = line.split(" ").map(Number)
}).on('close', function () {
  const [A, B, D] = input
  const sqrt_B = Math.ceil(Math.sqrt(B))

  const isPrim = new Array(B+1).fill(true)
  isPrim[1] = false
  for (let i = 2; i < sqrt_B; i++) {
    if(!isPrim[i]) continue
    for (let j = i+i; j <= B; j += i)
      isPrim[j] = false
  }

  let cnt = 0;
  for (let i = A; i <= B; i++)
    if (isIn(i, D) && isPrim[i]) cnt += 1
  console.log(cnt)
  process.exit();
});