function wordPattern(pattern, s) {
  let strArr = s.split(' ');

  if (pattern.length !== strArr.length) return false;

  let letterToWord = new Map();
  let wordToLetter = new Map();

  for (let i=0;i<pattern.length;i++) {
    let letter = pattern[i];
    let word = strArr[i];

    if (letterToWord.has(letter) && letterToWord.get(letter) !== word) return false;
    if (wordToLetter.has(word) && wordToLetter.get(word) !== letter) return false;

    // set the hash map values
    letterToWord.set(letter, word);
    wordToLetter.set(word, letter);
  }

  return true;
}

const r1 = wordPattern('abba', 'dog cat cat dog'); // true
const r2 = wordPattern('abba', 'dog cat dog dog'); // false