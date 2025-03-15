
function twoSum(nums, target) {
  let map = new Map();
  for (let i=0;i<nums.length;i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  // return empty array if sum pairs aren't found
  return [];
}

console.log(twoSum([0,4,5,2,5], 9));