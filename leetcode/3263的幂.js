/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (1) {
    if (n == 1) {
      return true;
    }
    n = n / 3;
    if (n < 1) {
      return false;
    }
  }
};
