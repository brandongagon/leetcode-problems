
function findMaxAverage(nums, k) {
  let currentSum = 0;
  for (let i=0;i<k;i++) {
    currentSum += nums[i]
  }
  
  let maxSum = currentSum;
  for (let i=k;i<nums.length;i++) {
    currentSum = nums[i] - nums[i - k];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum / k;
}