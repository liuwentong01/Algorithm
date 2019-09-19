/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var res = 0, jw = 0;
  for(let i = s.length-1; i >= 0; i--, jw++){
     res  += Math.pow(26, jw) * (s[i].charCodeAt()  - 65 + 1);
  }
  return res;
};
