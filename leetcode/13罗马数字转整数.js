/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };
  var res = 0;

  for (let i = 0; i < s.length; ) {
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      res += map[s.substring(i, i + 2)];
      i += 2;
    } else {
      res += map[s[i]];
      i++;
    }
  }
  return res;
};

console.log(romanToInt('MCMXCIV'));
