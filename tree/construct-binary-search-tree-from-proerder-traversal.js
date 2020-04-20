// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

 

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

 

// Note: 

// 1 <= preorder.length <= 100
// The values of preorder are distinct.


var bstFromPreorder = function(preorder) {
    
    if (preorder.length === 0 || preorder === null){
        return null;
    }
    
    let root = new TreeNode(preorder[0])
    
    const addToTree = (node, value) => {
        if (node.val >= value){
            if (node.left === null) node.left = new TreeNode(value)
            else addToTree(node.left, value)
        }  else {
            if (node.right === null) node.right = new TreeNode(value)
            else addToTree(node.right, value)
        }

    }
    
    
    for (let i = 1; i < preorder.length; i++){
        addToTree(root, preorder[i])
    }
    
    return root;
    


    
};