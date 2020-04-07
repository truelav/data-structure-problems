// Array

// EASY


// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// SOLUTION 1


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    const stack = [];
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        if (stack.length === 0 || stack[stack.length - 1] === s[i]){
            stack.push(s[i])
        } 
        if (stack.length > 0 && stack[stack.length - 1] !== s[i]){
            stack.pop()
            if(stack.length === 0){
                result++
            }
        }
    }
    
    return result
};


// Runtime: 60 ms, faster than 50.39% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.