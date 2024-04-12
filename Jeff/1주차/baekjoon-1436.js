/** 영화감독 숌 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

readline.on('line', function(line) {
  inputs = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
  let order = parseInt(inputs[0]);
  let count = 0;
  let upping = 666

  while (true) {
    if (upping.toString().includes('666')) count += 1;
    if (order === count) break
    upping += 1;
  }
  console.log(upping)
  process.exit();
});



// 1666