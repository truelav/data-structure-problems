// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

// Example 1:

// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: [3,3,7,7,10,11,11]
// Output: 10


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    if (nums.length === 0){
        return -1
    }

    for (let i = 0; i < nums.length; i=i+2){
        if (nums[i] !== nums[i + 1]){
            return nums[i]
        }
    }
};