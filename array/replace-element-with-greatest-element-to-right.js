// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
 

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

var replaceElements = function(arr) {
    
    let greatest = arr[arr.length - 1]
    let temp;
    
    for (let i = arr.length - 2; i >= 0; i--){
        temp = arr[i]
        arr[i] = greatest;
        
        if (temp > greatest){
            greatest = temp
        }
    }
    
    arr[arr.length - 1] = -1
    
    return arr
};




// Runtime: 68 ms, faster than 99.23% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.