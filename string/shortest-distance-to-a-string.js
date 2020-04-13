// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.




/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    
    //     const result = [];
    //     let point1 = 0;
        
    //     for (let i = 0; i < S.length; i++){
    //         if(S[i] === C){
    //             result.push(0)
    //             point1 = i + 1 
    //         } else {
    //             for (let k = point1; k < result.length; k++){
    //                 result[k]++
    //             }
    //             result.push(1)
    //         }
    //     }
        
    //     return result
        
        
        const indexes = [];
        let result = [];
        
        const calcDistance = (index) => {
            let min = S.length;
            for(let i = 0; i < indexes.length; i++){
                min = Math.min(min, Math.abs(index - indexes[i]))
                
            }
            result.push(min)
        }
        
        for (let i = 0; i < S.length; i++){
            if(S[i] === C){
                indexes.push(i)
            }
        }
    
        for (let i = 0; i < S.length; i++){
            calcDistance(i)
        }
        
        
        return result
    
    };