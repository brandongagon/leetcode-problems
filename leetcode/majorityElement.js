/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {    
	let hm = {};
  var max = 0;
  var candidate = 0;
	for(let i=0;i<nums.length;i++) {
  	let item = nums[i];
    if (!hm[item]) {
    	hm[item] = 0;
    }
    hm[item] += 1;
  }
  
  for (obj in hm) {
  	if (hm[obj] > max) {
    	max = hm[obj];
      candidate = obj;
    }
  }
  return Number(candidate);
};