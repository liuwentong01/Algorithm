var arr = readline().split(" ");
var row = parseInt(arr[0]),
  col = parseInt(arr[1]),
  tar = parseInt(arr[2]);
var res = [];
for (let i = 0; i < row; i++) {
  var tmp = readline().split(" ");
  res.push(tmp);
}

row = 0;
col = res[0].length - 1;
while (row < res.length && col > -1) {
  if (parseInt(res[row][col]) == tar) {
    console.log("Yes");
    break;
  } else if (parseInt(res[row][col]) > tar) {
    col--;
  } else {
    row++;
  }
}
if(row == res.length || col == res[0].length)
  console.log("No");
