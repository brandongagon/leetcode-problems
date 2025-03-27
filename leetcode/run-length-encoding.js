
function encode(str) {
  if (!str) return '';
  
  let output = '';
  let count = 1;

  for (let i=0;i<str.length;i++) {
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
    } else {
      output += count + str[i];
      count = 1;
    }
  }

  return output;
}

console.log(encode('aabbbbbc'));