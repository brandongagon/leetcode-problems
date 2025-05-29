function isValid(s) {
  let mappings = {
    ")":"(",
    "}":"{",
    "]":"["
  };
  let stack = [];

  for (let c of s) {
    if (mappings[c]) {
      let topChar = stack.length ? stack.pop() : "#";
      if (topChar !== mappings[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}

console.log(isValid("{}"));
console.log(isValid("{})"));
console.log(isValid("{}"));