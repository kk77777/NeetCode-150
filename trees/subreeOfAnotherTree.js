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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;
        if (this.isSameTree(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot);
    }

    /**
     * Helper to check if two trees are identitcal
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val &&
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right);
    }
}
