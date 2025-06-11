const arr1 = [1, [2, 3], [4, [5, 6]]];
const result1 = flattenArray(arr1);
console.log(result1); 
// Output: [1, 2, 3, 4, 5, 6]

const arr2 = [[1, 2], [3, [4, 5]], 6];
const result2 = flattenArray(arr2);
console.log(result2); 
// Output: [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  const result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element));
    } else {
      result.push(element);
    }
  });

  return result;
}
