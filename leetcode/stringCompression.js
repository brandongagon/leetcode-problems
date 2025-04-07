/**
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