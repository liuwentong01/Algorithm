/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle == '') return 0;
  for(let i = 0; i < haystack.length; i++){
    if(needle = haystack.substring(i, i+needle.length)){
      return i;
    }
  }
  return -1;
};
