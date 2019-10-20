function maxInWindows(num, size)
{
  var res = [];
  if(size == 0 || num.length < size) return [];
  if(num.length < size)
    return [Math.max(...num)];
  for(let i = 0; i < num.length-size+1; i++){
    var tmp = [];
    for(let j = i; j < i+size; j++){
      tmp.push(num[j]);
    }
 //   console.log(tmp)
    res.push(Math.max(...tmp))
  }
  return res;
}
console.log(maxInWindows([1,3,5,7,9,11,13,15], 4));