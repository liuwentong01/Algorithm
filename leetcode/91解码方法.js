/**
 * @param {string} s
 * @return {number}
 *///???????????????????????递归改动态规划
var numDecodings = function(s) {
  if(s[0] == '0')
    return 0;
  var res = 0;
  var dp = [];
  function dfs(index) {
    if(index >= s.length){
      res++;
      return;
    }
    if(s[index] == '0'){
      return;
    }
    dfs(index+1);
    var cal = parseInt(s.substring(index, index + 2));
    if(cal <= 26 && cal >=10){
      dfs(index+2);
    }
  }
  dfs(0);
  return res;
};

console.log(numDecodings("7541387519572282368613553811323167125532172369624572591562685959575371877973171856836975137559677665"));
