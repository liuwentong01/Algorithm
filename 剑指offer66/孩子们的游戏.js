//数组模拟环
function LastRemaining_Solution(n, m) {
  if (n == 0) {
    return -1;
  }
  if (n == 1) {
    return 0;
  }
  var arr = new Array(n).fill(0);
  var count = n, i = -1, step = 0;
  while(count > 0){
    i++;
    if(i == n) i = 0;
    if(arr[i] == -1) continue;
    step++;
    if(step == m){
      arr[i] = -1;
      step = 0;
      count--;
    }
  }

  return i;
}
