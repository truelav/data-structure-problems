// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.
// Accepted
// 430,029
// Submissions
// 1,260,042


var canJump = function(nums) {
    
    const memo = [];
    for (let i = 0; i < nums.length; i++){
        memo[i] = 'unknown';
    }
    
    memo[memo.length - 1] = 'good';
    
    for (let i = nums.length - 2; i >= 0; i--){
        let furthestJump = Math.min(i + nums[i], nums.length - 1)
        for (let k = i + 1; k <= furthestJump; k++){
            if (memo[k] === 'good'){
                memo[i] = 'good';
                break
            }
        }
    }
    
    return memo[0] === 'good'
    
};