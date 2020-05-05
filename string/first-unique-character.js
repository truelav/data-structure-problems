// First Unique Character in a String
// Solution
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    if (s.length === 0){
        return -1
    }
    
    let hash = {};
    let result = Infinity;
    
    for (let i = 0; i < s.length; i++){
        if (hash[s[i]] === undefined) {
            hash[s[i]] = i;
        } 
        else if (hash[s[i]] > -1) {
            hash[s[i]] = Infinity; 
        } 
    }
    
    for (let key in hash){
        result = Math.min(result, hash[key])
    }
    
    
    return (result === Infinity) ? -1 : result
};