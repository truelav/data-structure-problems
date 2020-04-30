// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Brute Force Solution

var lengthOfLongestSubstring = function(s) {
    
    let hash = {};
    let max = 0;
    let currentLength = 0;
    
    for(let i = 0; i < s.length; i++){
        for(let k = i; k < s.length; k++){
            if(!hash[s[k]]){
                hash[s[k]] = 1;
                currentLength++
            } else if (hash[s[k]] == 1){
                break;
            }
        }
        hash = {}
        max = Math.max(max, currentLength);
        currentLength = 0;
    } 
    return max
};