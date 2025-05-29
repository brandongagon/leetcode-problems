/**
 * Reverse a string in place
 * Time O(n) - linear
 * Memory O(1) - constant
 */


function reverse(s) {
    for (let i=0;i<s.length/2;i++) {
        let frontCopy = s[i];
        let backPointer = s.length - 1 - i;
        s[i] = s[backPointer];
        s[backPointer] = frontCopy;
    }

    return s;
}

console.log(reverse(['h','e','l','l','o']));