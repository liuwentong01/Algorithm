/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root == null) return true;
  return mirror(root.left, root.right);
};
function mirror(left, right){
  if(left == null && right == null) return true;
  if(left == null || right == null) return false;
  return left.val == right.val && mirror(left.left, right.right) && mirror(left.right, right.left);
}