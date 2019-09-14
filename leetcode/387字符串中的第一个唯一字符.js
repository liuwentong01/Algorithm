/**
 * @param {string} s
 * @return {number}
 *////暴力
var firstUniqChar = function(s) {
  if(s == '') return -1;
  for(var i = 0; i < s.length; i++){
    for(var j = 0; j < s.length; j++){
      if(i != j &&s[j] == s[i]) break;
    }
    if(j == s.length) return i;
  }
  return -1;
};

//对象模拟哈希表map
var firstUniqChar = function(s) {
  if(s == '') return -1;
  var map = {};
  for(var i = 0; i < s.length; i++){
    if(map[s[i]] || map[s[i]] == 0)
      map[s[i]] = -1;
    else map[s[i]] = i;
  }
  for(var i in map){
    if(map[i] != -1)
      return map[i];
  }
  return -1;
};
console.log(firstUniqChar("loveleetcode"));