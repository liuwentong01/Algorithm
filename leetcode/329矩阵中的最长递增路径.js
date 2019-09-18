/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if(matrix == null || matrix.length < 1) return 0;
  var row = matrix.length;
  var col = matrix[0].length;
  var res = [];
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      res[i][j] = 1;
      var r = i, c = j;
      dfs(i, j);
    }
  }
  function dfs(i, j){
    if(i < 0 || i >= row || j < 0 || j >= col ||  (matrix[i][j] <= matrix[r][c] && (i!=r && j!=c))){
      return;
    }
    res[r][c]++;
    dfs(i-1, j);
    dfs(i+1, j);
    dfs(i, j-1);
    dfs(i, j+1);
  }

};

