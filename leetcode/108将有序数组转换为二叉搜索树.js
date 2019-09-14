/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums.length){
    return null;
  }
  var mid = Math.floor((nums.length - 1) / 2);
  var head = new TreeNode(nums[mid]);
  head.left = sortedArrayToBST(nums.slice(0, mid));
  head.right = sortedArrayToBST(nums.slice(mid+1));
  return head;
};
