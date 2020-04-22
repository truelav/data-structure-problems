// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

// Approach 1  Brute force

var subarraySum = function(nums, k) {
    
    let sum = 0;
    let result = 0;
    
    for (let  start = 0; start < nums.length; start++){
        for (let end= start + 1; end <= nums.length; end++){
            let sum = 0;
            for (let i = start; i < end; i++ ){
                sum += nums[i]
                if (sum === k){
                    result++
                }
            }
        }
    }
    
    return result;
};


// Aproach 2 Hash
var subarraySum = function(nums, k) {
    
    let sum = 0;
    let result = 0;
    let hash = {0 : 1};
    
    for (let i = 0; i < nums.length; i++){
        
        sum += nums[i];
        
        if (hash[sum - k]){
            result += hash[sum - k]
        }
        
        if (!hash[sum]){
            hash[sum] = 1;
        } else {
            hash[sum]++
        }
    }
    
    return result
    
};