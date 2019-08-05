function QUICK(arr){
  if(arr == null || arr.length < 2){
    return;
  }
  quickSort(arr, 0, arr.length-1)
}

function quickSort(arr, L, R){
  if(L < R){
    var cur = dutchFlag(arr, L, R);
    quickSort(arr, L, cur[0]-1);
    quickSort(arr, cur[1]+1, R);
  }
  
}

function dutchFlag(arr, L, R) {
  var less = L - 1, more = R;
  while (L < more) {
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }
  swap(arr, L, R)
  return [less + 1, more];
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function main(){
  var arr = [2, 15, 26, 27, 44, 46, 48, 50, 3, 4, 5, 36, 38, 47, 19];
  QUICK(arr);
  console.log(1);
  console.log(arr);
}
main()