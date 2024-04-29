const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
