const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' ').map((el) => +el));
  })
  .on('close', function () {
    const numCount = input[0];
    let max = input[1][0];
    let min = input[1][0];
    for (let i = 0; i < numCount; i++) {
      if (max < input[1][i]) {
        max = input[1][i];
      }
      if (min > input[1][i]) {
        min = input[1][i];
      }
    }
    console.log(min);
    console.log(max);
    process.exit();
  });
