const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let numbers = input[i].split(' ');
  let A = parseInt(numbers[0]);
  let B = parseInt(numbers[1]);
  console.log(`Case #${i}: ${A + B}`);
}
