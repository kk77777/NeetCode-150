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
     * @params {TreeNode} root
     * @params {number} level
     * @params {number[]} maxLevel
     * @params {number[]} res
     */

    rightSideTraversal(root, level, maxLevel, res) {
        if (!root) return null;
        if (maxLevel[0] < level) {
            res.push(root.val);
            maxLevel[0] = level;
        }
        this.rightSideTraversal(root.right, level + 1, maxLevel, res);
        this.rightSideTraversal(root.left, level + 1, maxLevel, res);
    }


    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const maxLevel = [-1]; // taken as array as needs to be passed as reference
        this.rightSideTraversal(root, 0, maxLevel, res);

        return res;
    }
}
