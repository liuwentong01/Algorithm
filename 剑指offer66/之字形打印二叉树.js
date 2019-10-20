/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  if (pRoot == null) return [];
  var res = [];
  var ans = [];
  var flag = true;
  res.push(pRoot);
  while (res.length) {
    var len = res.length;
    var tmp = [];
    while (len) {
      var node = res.shift();
      tmp.push(node.val);
      if (node.left != null) res.push(node.left);
      if (node.right != null) res.push(node.right);
      len--;
    }
    if (flag) ans.push(tmp);
    else ans.push(tmp.reverse());
    flag = !flag;
  }
  return ans;
}
