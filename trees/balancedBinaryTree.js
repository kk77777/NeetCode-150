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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.getHeight(root) !== -1;
    }

    /**
     * @param {TreeNode} root
     * @return {number} height of tree
     */

    getHeight(node) {
        if (node === null) return 0;

        const left = this.getHeight(node.left);
        const right = this.getHeight(node.right);

        // If any subtree is unbalanced or current node violates balance
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    }
}
