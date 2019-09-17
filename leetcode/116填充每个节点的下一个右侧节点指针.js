/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(root == null){
    return root;
  }
  var left = root.left;
  var right = root.right;
  while(left){
    left.next = right;
    left = left.right;
    right = right.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};
