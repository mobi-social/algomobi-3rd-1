const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(parseInt(line))
}).on('close', function(){
  input.shift()
  const stack = []
  input.forEach((elem) => {
    if (elem === 0) stack.pop()
    else stack.push(elem)
  })
  
  console.log(stack.reduce((sum,elem)=>sum+elem,0))
  process.exit();
});