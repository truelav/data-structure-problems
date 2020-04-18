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
    for (let i = grid.length - 1; i >= 0; i--){
        for (let k = grid[0].length - 1; k >= 0; k--){
            if (i === grid.length - 1 && k === grid[0].length - 1){
                grid[i][k] = grid[i][k]
            } else if (k === grid[0].length - 1){
                grid[i][k] = grid[i][k] + grid[i+ 1][k]
            } else if (i === grid.length - 1){
                grid[i][k] = grid[i][k] + grid[i][k + 1]
            } else {
                grid[i][k] = Math.min(grid[i][k] + grid[i][k + 1], grid[i][k] + grid[i+ 1][k])
            }
            
        }
    }

    
    return grid[0][0];
};