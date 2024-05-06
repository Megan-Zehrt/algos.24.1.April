// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    let results1 = []
    let results2 = []
    

    function dfs(node, array){

        if(node == null){
            return null
        }

        if(node.left == null && node.right == null){
            array.push(node.val)
        }
        
        dfs(node.left, array)
        dfs(node.right, array)
    }

    dfs(root1, results1)
    dfs(root2, results2)

    if (results1.length !== results2.length) {
    return false;
    }
    for (let i = 0; i < results1.length; i++) {
        if (results1[i] !== results2[i]) {
            return false;
        }
    }
    return true;
};