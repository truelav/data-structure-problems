// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.



var maxAreaOfIsland = function (grid) {

    let max = 0;
    let current = 0;

    const checkIsland = (i, k) => {
        if (i < 0 || i >= grid.length || k < 0 || k >= grid[0].length || grid[i][k] === 0) return

        grid[i][k] = 0;
        current++
        checkIsland(i + 1, k)
        checkIsland(i - 1, k)
        checkIsland(i, k + 1)
        checkIsland(i, k - 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] === 1) {
                current = 0;
                checkIsland(i, k)
            }
            max = Math.max(max, current)
        }
    }

    console.log(current)

    return max

};