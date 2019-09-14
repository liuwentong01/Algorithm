/**
 * Definition for a binary tree node.
 *function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
  if(!preorder.length && !inorder.length)
    return;
  var head = preorder[0];
  var pos = inorder.indexOf(head);
  var midLeft = inorder.slice(0, pos), midRight = inorder.slice(pos+1);
  var preLeft = preorder.slice(1, pos+1), preRight = preorder.slice(pos+1);

  var tree = new TreeNode(head);
  tree.left = buildTree(preLeft, midLeft);
  tree.right = buildTree(preRight, midRight);
  return tree;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
