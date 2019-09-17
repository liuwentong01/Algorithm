/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if(board == null || board.length < 1) return board;
  var row = board.length;
  var col = board[0].length;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(board[i][j] == 'O' && (i == 0 || i == row-1 || j == 0 || j == col-1)){
        dfs(i, j);
      }
    }
  }
  function dfs( r, c){
    if(r < 0 || r >= row || c < 0 || c >= col || board[r][c] == 'X' || board[r][c] == 'Q' ){
      return;
    }
    board[r][c] = 'Q';
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }
  console.log(board);
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(board[i][j] == 'O') board[i][j] = 'X';
      if(board[i][j] == 'Q') board[i][j] = 'O';
    }
  }
  return board;
};
solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
]);