var sum = 0;
function InversePairs(data)
{
  if(data.length < 2){
    return data;
  }
  mergeSort(data, 0, data.length-1);
}
function mergeSort(arr, l, r){
  if(l == r){
    return;
  }
  var m = Math.floor((l + r)/2);
  mergeSort(arr, l, m);
  mergeSort(arr, m+1, r);
  merge(arr, l, m, r);
}
function merge(arr, l, m, r){
  var help = new Array(r-l+1);
  var i = 0, p1 = l, p2 = m+1;
  while(p1 <= m && p2 <= r){
    if(arr[p2] < arr[p1]){
      sum += m - p1 + 1;
    }
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while(p1 <= m){
    help[i++] = arr[p1++]
  }
  while(p2 <= r){
    help[i++] = arr[p2++]
  }
  for(let i = 0; i < help.length; i++){
    arr[l+i] = help[i];
  }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
InversePairs(arr);
console.log(sum);