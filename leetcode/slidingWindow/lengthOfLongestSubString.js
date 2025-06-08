
// find longest substring without duplicates
function longestSubstring(s) {
  let maxSize = 0;
  let left = 0;
  let set = new Set();

  for (let i=0;i<s.length;i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    maxSize = Math.max(maxSize, i - left + 1);
    set.add(s[i]);
  }

  return maxSize;
}