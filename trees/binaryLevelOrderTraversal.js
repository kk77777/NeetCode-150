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
     * @param {number} level
     * @param {number[][]} res
     * @returns void
     */
    levelOrderTraversal(root, level, res) {
        if (!root) return null;
        if (res.length <= level) {
            res.push([]);
        }

        res[level].push(root.val);

        this.levelOrderTraversal(root.left, level + 1, res);
        this.levelOrderTraversal(root.right, level + 1, res)

    }

    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        this.levelOrderTraversal(root, 0, res);
        return res;
    }

}
