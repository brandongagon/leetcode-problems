// This solution is intended for a sorted array in increasing order
// e.g [1,1,2,2,2,3,3]
// we will use two-pointers: 1 pointer for the current item and another to track the unique number
/**
 * 
 * @param [] nums 
 * @returns number
 */
function removeDups(nums) {
  let insertIndex = 0;
  for (let i=0;i<nums.length;i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
}

console.log(removeDups(['1','1','2','2']))// returns 2