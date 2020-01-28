Arrays

Easy

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.



// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.


// Input:
// matrix = [
//   [1,2],
//   [2,2]
// ]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.



// Solution 1:

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    for (let i = 1; i < matrix.length; i++){
        for (let k = 1; k < matrix[0].length; k++){
            if (matrix[i-1][k-1] !== undefined && matrix[i-1][k-1] !== matrix[i][k]){
                
                return false 
            }
        }
    }
    
    return true
    
};

// Runtime: 64 ms, faster than 78.18% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Toeplitz Matrix.
// Next challenges: