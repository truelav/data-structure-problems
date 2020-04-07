// ARRAYS

// EASY

// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]


// Solution 1:

/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var transpose = function(A) {
    
    const result = [];

    for (let i = 0; i < A[0].length; i++){
      result.push([])
    }
    
    for (let i = 0; i < A.length; i++){
        let temp = [];
        for (let k = 0; k < A[0].length; k++){
            result[k][i] = A[i][k]
        }
    }
    
    console.log(result)
    return result
};



// Solution 2: 

var transpose = function(A) {
    return A[0].map((_,  i) => A.map(j => j[i]));
};