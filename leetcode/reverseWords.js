// Reverse words in a string

function reverseWords(s) {
  // Use trim to remove any leading or trailing spaces
  s.trim();
  let words = s.split(/\s+/).reverse();

  return words.join(' ');
}