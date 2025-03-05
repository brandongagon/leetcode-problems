// using two-pointers, move all zeros to the end of a num array num[]
function moveZeros(nums) {
    let writeIndex = 0;
    for (let i=0;i<nums.length;i++) {
        // we move all non zero nums to the front
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    // now we add zeros to end of array based on the writeIndex
    for (let j=writeIndex;j<nums.length;j++) {
        nums[j] = 0;
    }

    return nums;
}

console.log(moveZeros([0,1,0,3,12]));