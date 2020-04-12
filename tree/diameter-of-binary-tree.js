// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.


var diameterOfBinaryTree = function(root) {
    let ans = 0;
    const core = (node) => {
      if (!node) return 0;
      const leftPathLength = core(node.left);
      const rightPathLength = core(node.right);
      const sumOfPath = leftPathLength + rightPathLength;
        
      if (sumOfPath > ans) ans = sumOfPath;
     
      console.log(ans)
      return Math.max(leftPathLength, rightPathLength) + 1;
      
    };
    core(root);
    return ans;
};