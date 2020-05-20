// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]


var plusOne = function(digits) {
    
    let extra = 0;
    let last = digits.length - 1
    if (digits[last] === 9){
        extra++;
        digits[last] = 0;
        for(let i = last - 1; i >= 0; i--){
            if(digits[i] === undefined){
                digits.unshift(1);
                break;
            } else if (digits[i] !== 9){
                digits[i]++
                break
            } else {
                continue
            }
        }
    } else {
        digits[last]++
    }
    
    return digits
};

//some comments will go over here
