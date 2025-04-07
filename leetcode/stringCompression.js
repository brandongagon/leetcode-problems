/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters
in chars:
  1. If the group's length is 1, append the character to s
  2. Otherwise, append the character followed by the group's length

The compressed string s, should not be returned separately, but instead, be stored in
the input character array chars. Note that group lengths that are 10 or longer will be split
into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.
*/
/**
 * Run-time O(n)
 * Space O(1)
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  if (chars.length === 0) {
    return 0;
  }

  // Init pointers
  let read = 0; // pointer to read characters
  let write = 0; // pointer to write compressed characters

  while (read < chars.length) {
    const currentChar = chars[read];
    let count = 0;

    // count consecutive occurrences of current character
    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }

    // write character
    chars[write] = currentChar;
    write++;

    // write count if greater than 1
    if (count > 1) {
      // Convert count to string and write each digit
      const countStr = count.toString();
      for (let i=0;i<countStr.length;i++) {
        chars[write] = countStr[i];
        write++;
      }
    }
  }

  return write;
}