/* 🤖 알고리즘/자료구조: [구현] */
/* 📛 문제이름: 창영이의 일기장 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const moums = ['a','e','i','o','u']

readline.on('line', function(line) {
  input = line;
}).on('close', function () {
  const splitted = input.split("")
  const totLength = splitted.length
  const result = []
  for (let i = 0; i < totLength; i++){
    if (moums.includes(splitted[i])) {
      result.push(splitted[i])
      i+=2;
    }
    else {
      result.push(splitted[i])
    }
  }
  console.log(result.join(""))
  process.exit();
});