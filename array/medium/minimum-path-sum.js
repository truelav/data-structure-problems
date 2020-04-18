// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let copy = [];

    for (let i = 0; i < grid.length; i++){
        copy.push([])
        for (let k = 0; k < grid[0].length; k++){
            copy[i].push(grid[i][k])
        }
    }
    

    for (let i = grid.length - 1; i >= 0; i--){
        for (let k = grid[0].length - 1; k >= 0; k--){
            if (i === grid.length - 1 && k === grid[0].length - 1){
                copy[i][k] = copy[i][k]
            } else if (k === grid[0].length - 1){
                copy[i][k] = copy[i][k] + copy[i+ 1][k]
            } else if (i === grid.length - 1){
                copy[i][k] = copy[i][k] + copy[i][k + 1]
            } else {
                copy[i][k] = Math.min(copy[i][k] + copy[i][k + 1], copy[i][k] + copy[i+ 1][k])
            }
            
        }
    }

    
    return copy[0][0];
    
};