const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input = line.split('');
    
  })
  .on('close', function () {
    let firstCount = 0;
    let secondCount = 0;
    input.filter((input[0])=>)
    process.exit();
  });
// 단어를 입력 받으면 split 으로 나눈다 전부 대문자로  변경? .map으로?
//방법 1. 첫번재 count 체크후 빼 ,두번째 체크후 빼
