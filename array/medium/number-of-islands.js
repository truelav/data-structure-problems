// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


var numIslands = function(grid) {
    
    let root;
    let result = 0;
    
    const checkIsland = (i, k) => {
        if (i < 0 || i >= grid.length || k < 0 || k >= grid[0].length || grid[i][k] === '0') return
    
        grid[i][k] = '0';
        
        checkIsland(i + 1, k) //bottom
        checkIsland(i - 1, k) //top
        checkIsland(i, k + 1) //right
        checkIsland(i, k - 1) //left
    
    }

    for (let i = 0; i < grid.length; i++){
        for(let k = 0; k < grid[0].length; k++){
            if(grid[i][k] === '1'){
                result++;
                checkIsland(i,k)
            }
        }
    }
    
    return result
    
};

