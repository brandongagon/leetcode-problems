let input = '$$*****#';

function encode(str) {
  let output = '';
  let map = new Map();

  for (let i=0;i<str.length;i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1)
  }

  for (let [key, value] of map) {
    output += `${key}${value}`;
  }

  console.log(output);
}

encode(input);