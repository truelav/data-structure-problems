// Easy

// 3314

// 110

// Add to List

// Share
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


var moveZeroes = function(nums) {
    let currentNonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++){
        // if (nums[i] === 0 && i === 0){
        //     currentZeroIndex = i;
        // }
        if (nums[i] !== 0){
            nums[currentNonZeroIndex] = nums[i];
            currentNonZeroIndex++
        }
    }
    
    for (let i = currentNonZeroIndex; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

// Runtime: 64 ms, faster than 60.32% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 35.8 MB, less than 40.42% of JavaScript online submissions for Move Zeroes.