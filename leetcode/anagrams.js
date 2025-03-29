
function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let hm = {};
  for (let i=0;i<str1.length;i++) {
    let char1 = str1[i];
    if (!hm[char1]) {
      hm[char1] = 0;
    }
    hm[char1] += 1;
  }

  for (let i=0;i<str2.length;i++) {
    let char2 = str2[i];
    if (!hm[char2]) {
      return false;
    }

    hm[char2] -= 1;
    if (hm[char2] === 0) {
      delete hm[char2];
    }
  }
  return Objects.key(hm).length === 0;
}