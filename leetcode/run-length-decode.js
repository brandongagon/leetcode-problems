
function runLengthDecode(encodedStr) {
  if (!encodedStr) return '';

  let output = '';
  let i = 0;

  while (i < encodedStr.length) {
    let countStr = '';
    while (i < encodedStr.length && !isNaN(parseInt(encodedStr[i]))) {
      countStr += encodedStr[i];
      i++;
    }

    const count = parseInt(countStr);

    if (i < encodedStr.length) {
      const char = encodedStr[i];

      output += char.repeat(count);

      i++;
    }
  }
  return output;
}