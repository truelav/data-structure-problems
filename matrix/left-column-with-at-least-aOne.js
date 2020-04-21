// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

 

// Example 1:



// Input: mat = [[0,0],[1,1]]
// Output: 0
// Example 2:



// Input: mat = [[0,0],[0,1]]
// Output: 1
// Example 3:



// Input: mat = [[0,0],[0,0]]
// Output: -1
// Example 4:



// Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
// Output: 1
 

// Constraints:

// 1 <= mat.length, mat[i].length <= 100
// mat[i][j] is either 0 or 1.
// mat[i] is sorted in a non-decreasing way.


/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    
    //     let columnLength = binaryMatrix.dimensions()[0] //m
    //     let rowLength = binaryMatrix.dimensions()[1]; //n
    //     let row = 0;
    //     let column = columnLength;
    //     let minColumn = -1
    
    //     for (let i = 0; i < columnLength; i++){
    //         let left = 0;
    //         let right = rowLength;
    //         let current = -1;
            
    //         while(left < right){
    //             let mid = Math.floor((left + right)/2);
    //             if (binaryMatrix.get(i, mid) === 1){
    //                 current = mid;
    //                 right = mid;
    //             } else {
    //                 left = mid + 1
    //             }
    //             console.log(current)
    //         }
            
    //         if (current >= 0) minColumn = Math.min(minColumn, i)
    //     }
        
        
    //     return minColumn
        
        let m = binaryMatrix.dimensions()[0];
        let n = binaryMatrix.dimensions()[1];
        let row = 0;
        let col = n;
    
        let left = 0;
        let right = n;
    
        while(row < m){
            let left = 0;
            while(left < right){
                let mid = Math.floor((left+right)/2);
                if(binaryMatrix.get(row, mid) == 1){
                    right = mid;
                }else{
                    left = mid+1;
                }
            }
            col = left;
            row++;
        }
    
        return col == n? -1 : col;
        
    };