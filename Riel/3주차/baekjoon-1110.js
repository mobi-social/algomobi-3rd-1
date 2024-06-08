const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
readline
  .on('line', function (line) {
    input = parseInt(line);
  })
  .on('close', function () {
    let inputNum = input;
    let addNum;
    let count = 0;
    while (1) {
      count++;
      addNum = Math.floor(inputNum / 10) + (inputNum % 10);
      inputNum = (inputNum % 10) * 10 + (addNum % 10);
      if (inputNum === input) {
        break;
      }
    }
    console.log(count);
    process.exit();
  });
