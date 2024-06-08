const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input = line.toUpperCase().split('');
  })
  .on('close', function () {
    const checkArray = Array(26).fill(0);
  });

// 해결못함 , 해결방안들을 머릿속에서 생각안나고 , 풀이들을 봐도 선뜻이해가 안됨 다시올것
