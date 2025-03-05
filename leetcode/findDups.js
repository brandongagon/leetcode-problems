// Given an integar array nums of length n where all the integers are nums in the range [1,n]
// and each integer appears once or twice, return an array of all the integers that appear twice

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// typescript implemnentation - revisit
// function findDups(nums: number[]): number[] {
//     let output: number[] = [];

//     return output;
// }

function findDups(nums) {
    let output = [];
    for (let i=0;i<nums.length;i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            output.push(Math.abs(nums[i]));
        }
        nums[index] = -nums[index];
    }

    return output;
}

console.log(findDups([4,3,2,7,8,2,3,1]));