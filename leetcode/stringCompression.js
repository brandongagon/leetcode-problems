/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  if (chars.length === 0) {
    return 0;
  }

  let read = 0;
  let write = 0;

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

    if (count > 1) {
      const countStr = count.toString();
      for (let i=0;i<countStr.length;i++) {
        chars[write] = countStr[i];
        write++;
      }
    }
  }

  return write;
}