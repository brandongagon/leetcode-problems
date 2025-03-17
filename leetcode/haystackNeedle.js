
function strStr(haystack, needle) {
  let haystackSplit = haystack.split(needle);

  if (haystackSplit.length === 1) {
    return -1;
  }

  return haystackSplit[0].length;
}

console.log(strStr('leetcode', 'leeto'));

