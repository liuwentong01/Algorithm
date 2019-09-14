/**
 * @param {number} n
 * @return {string[]}
 */
//dfs + 剪枝
var generateParenthesis = function(n) {
  var ans = [];
  function dfs(l, r, has) {
    if (r > l) return;
    if (l > n) return;
    if (l == r && l == n) ans.push(has);
    dfs(l + 1, r, has+'(');
    dfs(l, r + 1, has+')');
  }
  dfs(0, 0, "");
  return ans;
};
