// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.



// Solution 1 Brute Force

var findMaxLength = function(nums) {
    
    let max = 0;
    
    for (let k = 0; k < nums.length; k++){
        
        let longestSubArray = 0;
        let zeroes = 0;
        let ones = 0;
        
        for (let i = k; i < nums.length; i++){
            if (nums[i] === 1){
                ones++
            } if (nums[i] === 0){
                zeroes++
            } if (zeroes === ones && longestSubArray < zeroes + ones){
                longestSubArray = zeroes + ones;
            }
        }
        
        max = Math.max(max, longestSubArray)
        
    }

    
    return max
    
};




// Solution 2 HashMap

var findMaxLength = function(nums) {
    
    const hash = {0: -1}
    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++){

        (nums[i] === 0) ? count-- : count++; 

        if (hash[count]){
            max = Math.max(max, i - hash[count])
        } else {
            hash[count] = i;
        }
    }

    return max
    
};
