const input = '5 1 1 2 3 3 4 9 8 5 2';
const number = input.split(' '); //  확인을위해 \n뺌
for (let i = 1; i <= number[0]; i++) {
  console.log(`case${i} , ${Number(number[2 * i - 1]) + Number(number[2 * i])}`);
}
