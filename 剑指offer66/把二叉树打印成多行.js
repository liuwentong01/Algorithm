/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
  if(pRoot == null) return [];
  var res = [];
  var ans = [];
  res.push(pRoot);
  while(res.length){
    var len = res.length;
    var tmp = [];
    while(len){
      var node = res.shift();
      tmp.push(node.val);
      if(node.left != null)res.push(node.left);
      if(node.right != null) res.push(node.right)
      len--;
    }
    ans.push(tmp);
  }
  return ans;
}