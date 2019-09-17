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
//方法一中序遍历
var isValidBST = function(root) {
  if(root == null || (root.left == null && root.right == null)) return true;
  var res = [];
  function mid(root){
    if(root == null) return;
    mid(root.left);
    res.push(root.val);
    mid(root.right);
  }
  mid(root);
  for(let i = 1; i < res.length; i++){
    if(res[i] < res[i-1]){
      return false;
    }
  }
  return true;
};
