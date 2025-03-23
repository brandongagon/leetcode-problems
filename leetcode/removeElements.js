// given an integar array nums and an integar val, remove all occurences of val in-place.
// we then return the number of elements in nums which are not equal to val
/**
 * 
 * @param {*} nums 
 * @param {*} val 
 */
function removeElement(nums, val) {
  let writePointer = 0;
  for(let i=0;i<nums.length;i++) {
    if (nums[i] !== val) {
      nums[writePointer] = nums[i];
      writePointer++;
    }
  }

  return writePointer;
}