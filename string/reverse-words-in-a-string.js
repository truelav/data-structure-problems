// Given an input string, reverse the string word by word.

 

// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Note:

// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Follow up:

// For C programmers, try to solve it in-place in O(1) extra space.


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    
    let arr = s.split(' ');
    console.log(arr)
    
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] === ''){
           continue
        } 
        else {
            if (result.length == 0){
                result = result + arr[i]
            } else {
                result = result + ' ' + arr[i]
            }
        }
    }
    
    return result
};