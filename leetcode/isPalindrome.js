/*
 Give an integer x, return true if x is a palindrome, and false otherwise
*/
function isPalindrome(x) {
  let numsArr = x.toString().split('');

  for (let i=0;i<numsArr.length;i++) {
    let frontPointer = numsArr[i];
    let endPointer = numsArr[numsArr.length - 1 - i];
    if (frontPointer !== endPointer) {
      return false;
    }
  }
  return true;
}