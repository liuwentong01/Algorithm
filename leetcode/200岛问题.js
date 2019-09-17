/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(grid == null || grid.length < 1)
    return 0;
  var row = grid.length;
  var col = grid[0].length;
  var res = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] == 1){
        ++res;
      dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, r, c) {
    if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] == 0) {
      return;
    }
    grid[r][c] = 0;
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  }

  return res;
};
