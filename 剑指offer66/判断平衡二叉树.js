/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// function IsBalanced_Solution(pRoot) {
//   if (pRoot == null) {
//     return true;
//   }
//   if (pRoot.left == null && pRoot.right == null) {
//     return 1;
//   }
//   if (pRoot.left != null) var deepl = IsBalanced_Solution(pRoot.left) + 1;
//   if (pRoot.right != null) var deepr = IsBalanced_Solution(pRoot.right) + 1;
//   if (Math.abs(deepl - deepr) > 1) {
//     return false;
//   }
//   return true;
// }

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var res = true;
function IsBalanced_Solution(pRoot)
{
    getHeight(pRoot, 1, res);
    return res;
}
function getHeight(head, level, res){
    if(head == null){
        return res;
    }
    var lH = getHeight(head, level+1, res);
    if(!res){
        return level;
    }
    var rH = getHeight(head, level+1, res);
    if(!res){
        return level;
    }
    if(Math.abs(lH - rH) > 1){
        res = false;
    }
    return Math.max(lH, rH);
}
