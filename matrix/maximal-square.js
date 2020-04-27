// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
    
  
    if (!matrix || matrix.length < 1){
        return 0
    } 
    
    let maxSquare = 0;
    
    let cache = []

    for(let i = 0; i < matrix.length; i++){
        let arr = []
        for(let k = 0; k < matrix[0].length; k++){
            arr.push(parseInt(matrix[i][k]))
        }
        cache.push(arr)
    }

    for (let i = 0; i < matrix.length; i++){
        for(let k = 0; k < matrix[0].length; k++){
            if (i === 0 || k == 0){
                cache[i][k] = matrix[i][k]
            } 
            else if (matrix[i][k] === '1'){
                cache[i][k] = 1 + Math.min(cache[i-1][k], cache[i][k-1], cache[i-1][k-1])
            }

            maxSquare = Math.max(maxSquare, cache[i][k])
        }
    }

    return maxSquare*maxSquare
    
};