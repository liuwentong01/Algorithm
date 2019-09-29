//递归前中后序遍历
/**function TreeNode(value){
 *  this.val = value;
 *  this.left = null;
 *  this.right = null;
 * }
 * @param {TreeNode} root 
 */
function treeTravels(root){
  if(root == null) return null;
  console.log(root.val);
  treeTravels(root.left);
  treeTravels(root.right);
}

/**
 * 非递归前中后序遍历
 */
