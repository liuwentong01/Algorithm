/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(root == null) return [];
  var res = [];
  dfs(root, 0);
  function dfs(root, level) {
    if (!res[level]) res.push([]);
    res[level].push(root.val);
    if (root.left != null) dfs(root.left, level + 1);
    if (root.right != null) dfs(root.right, level + 1);
  }
  return res;
};