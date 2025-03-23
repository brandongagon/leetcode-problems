// naive approach
// we write the values from num2 into the end of nums1 and then sort nums1
function merge(nums1, m, nums2, n) {
    for (let i=0;i<nums1.length;i++) {
        nums1[i + m] = nums2[i];
    }

    nums1.sort((a,b) => (a - b));
    return nums1;
}