/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
     /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root === null) return 0;
        
        let maxDiameter = 0;
        

        /**
         * Recursively computes the height of a binary tree node and updates the maximum diameter.
         *
         * @param {TreeNode|null} node - The current node in the binary tree.
         * @returns {number} The height of the current node.
         */
        function solve(node) {
            if (node === null) return 0;
            
            let left = solve(node.left);
            let right = solve(node.right);
            
            maxDiameter = Math.max(maxDiameter, left + right);
            return Math.max(left, right) + 1;
        }
        
        solve(root);
        return maxDiameter;
    }
}