/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }
  var l = maxDepth(root.left);
  var r = maxDepth(root.right);
  return Math.max(l, r) + 1;
};
