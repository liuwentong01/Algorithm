/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   if (nums == null || nums.length < 1) return 0;
//   var res = [nums[0]];
//   var ans = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     res[i] = Math.max(nums[i], nums[i] + res[i - 1]);
//     ans = Math.max(ans, res[i]);
//   }
//   return ans;
// };
var maxSubArray = function(nums) {
  var res = nums[0];
  var sum = -Number.MAX_VALUE;
  for (let i = 1; i < nums.length; i++) {
    res = nums[i] > nums[i] + res ? nums[i] : nums[i] + res;
    sum = Math.max(sum, res);
  }

  return Math.max(sum, res);
};
console.log(maxSubArray([-1]));
