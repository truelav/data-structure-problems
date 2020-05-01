// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

 

// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.
 

// Constraints:

// 1 <= arr1.length, arr2.length, arr3.length <= 1000
// 1 <= arr1[i], arr2[i], arr3[i] <= 2000


// Hash table solution 
// O(n) Space complexity and O(4n) time complexity

var arraysIntersection = function(arr1, arr2, arr3) {
    
    let a1 = a2 = a3 = 0;
    let hash = {}
    let length = Math.max(arr1.length, arr2.length, arr3.length)
    let result = [];
    
    for (let i = 0; i < arr1.length; i++){
        if (!hash[arr1[i]]){
            hash[arr1[i]] = 1;
        } else {
            hash[arr1[i]]++
        }
    }
    
    for (let i = 0; i < arr2.length; i++){
        if (!hash[arr2[i]]){
            hash[arr2[i]] = 1;
        } else {
            hash[arr2[i]]++
        }
    }
    
    for (let i = 0; i < arr3.length; i++){
        if (!hash[arr3[i]]){
            hash[arr3[i]] = 1;
        } else {
            hash[arr3[i]]++
        }
    }
    
    for (let key in hash){
        if (hash[key] === 3) result.push(parseInt(key, 10))
    }
  
    return result
};

