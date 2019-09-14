/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *///双指针
var reverseString = function(s) {
  if (s.length < 2) return s;
  var left = 0,
    right = s.length - 1;
  while (left < right) {
    var tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
  return s;
};
