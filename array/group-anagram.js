// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
    
    const hash = {};
    
    strs.forEach((str) => {
        let letters = str.split('').sort();
        
        if (!hash[letters]){
            hash[letters] = [str]
        } else {
            hash[letters].push(str)
        }
    })
    
    const result = []
    
    for (key in hash){
        result.push(hash[key])
    }

    return result
};
    
    
// Runtime: 300 ms, faster than 7.72% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 46.5 MB, less than 17.39% of JavaScript online submissions for Group Anagrams.