
function plusOne(digits) {
  // we need to join the digits into a string to perform
  // more operations
  let digitsStr = digits.join('');
  // Here we use BigInt for the precision. Number() will lose precision at a certain point
  let plusOneSum = BigInt(digitsStr) + BigInt(1);
  // Here we convert back to a string array and then convert each digit to a int (or number in JS)
  return plusOneSum.toString().split('').map(num => Number(num));
}

let input = [1,2,3,2,9,9,9];

console.log(plusOne(input));