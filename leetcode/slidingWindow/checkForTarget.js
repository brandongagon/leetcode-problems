/*
Time: O(n)

Problem: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.

example: nums = [1,2,4,6,8,9,14,15] and target = 13, return true because 4 + 9 = 13

The reason this algorithm works: because the numbers are sorted, moving the LEFT pointer increases the value and moving the RIGHT pointer decreases the value.
*/

function checkForTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // calculate current sum
    let curr = nums[left] + nums[right];
    if (curr === target) {
      return true;
    }

    if (curr > target) {
      right--;
    } else {
      left++;
    }

  }

  return false;
}

console.log(checkForTarget([1,2,4,6,8,9,14,15], 13))


