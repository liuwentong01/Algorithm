/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str = [], pos = 0;
  for(let i = 0; i < s.length; i++){
    if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')){
      str[pos++] = s[i].toLowerCase();
    }
    else if(parseInt(s[i]) >= 0 && parseInt(s[i]) <= 9){
      str[pos++] = s[i]
    }
  }
  //console.log(str);
  var left = 0,right = pos - 1;
  while(left < right){
    if(str[left] != str[right]){
      return false;
    } else{
      left++;
      right--;
    }
  }
  return true;
};
console.log(isPalindrome("0P"));