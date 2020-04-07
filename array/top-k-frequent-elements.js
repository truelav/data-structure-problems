// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


var topKFrequent = function(nums, k) {
  
    const hash = {};
    
    for (let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]){
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    
    
    let keys = Object.keys(hash)
    
    keys.sort((a, b) => hash[b] - hash[a])
    
    return keys.splice(0, k)
};

