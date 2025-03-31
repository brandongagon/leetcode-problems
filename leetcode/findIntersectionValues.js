
function findIntersectionValues(nums1, nums2) {
  let setForNums1 = new Set(nums2);
  let setForNums2 = new Set(nums1);

  // Find intersection of distinct values between nums1 and nums2
  let nums1Values = setForNums1.filter(num => setForNums1.has(num)).length;
  // Find intersection of distinct values between nums2 and nums1
  let nums2Values = setForNums2.filter(num => setForNums2.has(num)).length;

  return [nums1Values, nums2Values];
}