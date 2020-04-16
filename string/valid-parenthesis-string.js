// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].


var checkValidString = function(s) {
    
    if(s.length === 0) return true;
    
    let arr = s.split('');
    let stack = [];
    let star = [];
    
    for(let i=0; i<arr.length;i++) {
        if(arr[i] ==='*') {
            star.push(i);       // inserting current index of '*'
        } else if(arr[i] === '('){
            stack.push(i);      // inserting current index of '('
        } else {
           if(stack.length > 0){              
               stack.pop();     // valid ')' found in stack 
           } else if(star.length > 0){   
               star.pop();                                 
           } else {               
               return false;
           }
        }        
    }
    
    let i = stack.length - 1;
    let j = star.length -1;
    
    while(stack[i] < star[j]) {
        stack.pop();
        star.pop();
        i--; j--;
    }
    
    if(stack.length === 0) {
        return true;
    } else {
        return false;
    }    
    
};