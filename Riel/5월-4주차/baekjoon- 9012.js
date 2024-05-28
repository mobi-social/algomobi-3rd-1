const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
  let a = input[i];
  let openCount = 0;
  let closeCount = 0;
  let isValid = true;

  for (let j = 0; j < a.length; j++) {
    if (a[j] === '(') {
      openCount++;
    } else if (a[j] === ')') {
      closeCount++;
      if (closeCount > openCount) {
        isValid = false;
        break;
      }
    }
  }

  if (isValid && openCount === closeCount) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
