//ARRAY
// Easy

// 

//Solution 1

var numberOfSteps  = function(num) {
    let result = 0;
    let rest = num;
    
    while (rest > 0){
        if (rest % 2 === 0){
            rest = rest/2
        } else {
            rest = rest - 1
        }
        result++
    }
    
    return result
    
};

//Solution 2

