
function createHashMap(str) {
  let hm = {};
  for (let i=0;i<str.length;i++) {
    let char = str[i];
    if (!hm[char]) {
      hm[char] = 0;
    }
    hm[char] += 1;
  }
  return hm;
}

console.log(createHashMap('133$$&ABAB'));