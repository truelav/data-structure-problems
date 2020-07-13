// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    const stack = [];
    const stack2 = [];
    let current = 0;
    let result = true;
    
    const helper = (node) => {
        if (node === undefined) return
        else if (node === null){
            stack.push(null)
            return
        }
        stack.push(node.val)
        helper(node.left)
        helper(node.right)
    } 
    
    const helper3 = (node) => {
        if (node === undefined) return
        else if (node === null){
            stack2.push(null)
            return
        }
        stack2.push(node.val)
        helper3(node.left)
        helper3(node.right)
    } 
    
    
    helper(p)
    helper3(q)
    
    if (JSON.stringify(stack) === JSON.stringify(stack2)){
        return true
    } else {
        return false
    }
    
};
